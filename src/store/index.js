import { createStore } from "vuex";
import {
  changeNotification,
  deleteItem,
  deleteUser,
  doRegisterItem,
  doRentalRequest,
  getAllRatingsOwner,
  getAllRatingsUser,
  getFeedbacks,
  getItems,
  getMeanRating,
  getMyItems,
  getMyNotifications,
  getMyRentals,
  getMyRentalsOwner,
  getOccupiedDates,
  getUsers,
  search,
  updateItem,
} from "@/service/apiService";

const getDefaultState = () => {
  return {
    token: null,
    currentItem: "",
    currentRental: "",
    userInfo: "",
    currentImageId: null,
    items: [],
    myItems: [],
    myRentals: [],
    myRentalsActive: [],
    myRentalsFinished: [],
    myNotifications: [],
    feedbacks: [],
    users: [],
    currentSearchSentence: "",
    currentRatingsOwner: [],
    currentRatingsUser: [],
    currentRatings: [],
    meanRating: null,
    currentRentalsOwnerActive: [],
    currentRentalsOwnerFinished: [],
    occupiedDates: [],
  };
};
const state = getDefaultState();

export default createStore({
  state,
  getters: {
    GET_ADDRESS() {
      if (state.currentItem === "") {
        return state.userInfo.streetAddress;
      }
      return state.currentItem.streetAddress;
    },
    GET_POSTALCODE() {
      if (state.currentItem === "") {
        return state.userInfo.postalCode;
      }
      return state.currentItem.postalCode;
    },
    GET_CITY() {
      if (state.currentItem === "") {
        return state.userInfo.postOffice;
      }
      return state.currentItem.postOffice;
    },
    GET_PRICE() {
      return state.currentItem.price === 0;
    },
    GET_LONG() {
      return state.currentItem.lng;
    },
    GET_LAT() {
      return state.currentItem.lat;
    },
    GET_OCCUPIED_DATES() {
      return state.occupiedDates;
    },
  },
  mutations: {
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    ADD_USER(state, userInfo) {
      state.userInfo = userInfo;
    },
    ADD_TOKEN(state, token) {
      state.token = token;
    },
    SET_IMAGE_ID(state, currentImageId) {
      state.currentImageId = currentImageId;
    },
    SET_ITEMS(state, response) {
      state.items = response;
    },
    SET_ITEM(state, item) {
      state.currentItem = item;
    },
    SET_RENTAL(state, rental) {
      state.currentRental = rental;
      sessionStorage.setItem("rental", JSON.stringify(rental));
    },
    SET_FEEDBACKS(state, feedbacks) {
      state.feedbacks = feedbacks;
    },
    SET_MY_ITEMS(state, items) {
      state.myItems = items;
    },
    SET_MY_RENTALS(state, rentals) {
      state.myRentals = rentals;
    },
    SET_MY_RENTALS_ACTIVE(state, rentals) {
      if (rentals !== "") {
        state.myRentalsActive = rentals;
      }
    },
    SET_MY_RENTALS_FINISHED(state, rentals) {
      if (rentals !== "") {
        state.myRentalsFinished = rentals;
      }
    },
    SET_MY_RENTALS_OWNER_ACTIVE(state, rentals) {
      if (rentals !== "") {
        state.currentRentalsOwnerActive = rentals;
      }
    },
    SET_MY_RENTALS_OWNER_FINISHED(state, rentals) {
      if (rentals !== "") {
        state.currentRentalsOwnerFinished = rentals;
      }
    },
    SET_MY_NOTIFICATIONS(state, notifications) {
      state.myNotifications = notifications;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_DATES(state, dates) {
      state.occupiedDates = dates;
    },
    SET_CURRENT_SEARCH_SENTENCE(state, searchSentence) {
      state.currentSearchSentence = searchSentence;
    },
    SET_CURRENT_RATINGS_OWNER(state, ratings) {
      state.currentRatingsOwner = ratings;
    },
    SET_CURRENT_RATINGS_USER(state, ratings) {
      state.currentRatingsUser = ratings;
    },
    RESTORE_TOKEN() {
      const tokenString = localStorage.getItem("token");
      const userString = localStorage.getItem("user");
      if (tokenString) {
        this.state.token = JSON.parse(tokenString);
        const userData = JSON.parse(userString);
        this.state.userInfo = userData;
        console.log(userData);
      }
    },
    RESTORE_ITEM(state) {
      const itemString = sessionStorage.getItem("item");
      if (itemString) {
        state.currentItem = JSON.parse(itemString);
      }
    },
    RESTORE_RENTAL() {
      const rentalString = sessionStorage.getItem("rental");
      if (rentalString) {
        this.state.currentRental = JSON.parse(rentalString);
      }
    },
    SET_MEAN_RATING(state, meanRating) {
      state.meanRating = meanRating;
    },
    CLEAR_LOCALSTORAGE() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    resetState({ commit }) {
      commit("RESET_STATE");
    },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
    storeToken({ commit }, token) {
      commit("ADD_TOKEN", token);
      localStorage.setItem("token", JSON.stringify(token));
    },
    setCurrentImageId({ commit }, currentImageId) {
      commit("SET_IMAGE_ID", currentImageId);
    },
    getItems({ commit }, pageObject) {
      getItems(pageObject.page, pageObject.pageSize)
        .then((response) => {
          commit("SET_ITEMS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setItem({ commit }, item) {
      commit("SET_ITEM", item);
      sessionStorage.setItem("item", JSON.stringify(item));
    },
    logoutStore({ commit }) {
      commit("CLEAR_LOCALSTORAGE");
    },
    getFeedbacks({ commit }) {
      getFeedbacks(this.state.token)
        .then((response) => {
          commit("SET_FEEDBACKS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchMyItems({ commit }) {
      let items = await getMyItems(
        this.state.userInfo.userId,
        this.state.token
      );
      commit("SET_MY_ITEMS", items);
    },
    async fetchAllRentals({ commit }) {
      let rentalsUserAccepted = await getMyRentals(
        this.state.userInfo.userId,
        this.state.token,
        "ACCEPTED"
      );
      let rentalsUserCanceled = await getMyRentals(
        this.state.userInfo.userId,
        this.state.token,
        "CANCELED"
      );
      let rentalsOwnerAccepted = await getMyRentalsOwner(
        this.state.userInfo.userId,
        this.state.token,
        "ACCEPTED"
      );
      let rentalsOwnerCanceled = await getMyRentalsOwner(
        this.state.userInfo.userId,
        this.state.token,
        "CANCELED"
      );
      commit("SET_MY_RENTALS_ACTIVE", rentalsUserAccepted);
      commit("SET_MY_RENTALS_OWNER_ACTIVE", rentalsOwnerAccepted);
      commit("SET_MY_RENTALS_FINISHED", rentalsUserCanceled);
      commit("SET_MY_RENTALS_OWNER_FINISHED", rentalsOwnerCanceled);
    },
    async fetchMyNotifications({ commit }) {
      let notifications = await getMyNotifications(
        this.state.userInfo.userId,
        this.state.token
      );
      if (notifications) {
        notifications.reverse();
      }
      commit("SET_MY_NOTIFICATIONS", notifications);
    },
    async fetchOccupied({ commit }) {
      let dates = await getOccupiedDates(
        this.state.currentItem.itemId,
        this.state.token
      );
      if (dates.status === 200) {
        commit("SET_DATES", dates.data);
      }
    },
    async updateItem({ commit }, item) {
      let response = await updateItem(
        item,
        state.currentItem.itemId,
        this.state.token
      );
      commit("SET_ITEM", response);
    },
    async setNotification(notificationId) {
      await changeNotification(notificationId, this.state.token);
    },
    async deleteItem({ commit }) {
      await deleteItem(state.currentItem.itemId, this.state.token);
      commit("SET_ITEM", null);
    },
    async registerItem({ commit }, item) {
      let response = await doRegisterItem(item, this.state.token);
      commit("SET_ITEM", response);
    },
    async registerRental({ commit }, rental) {
      let response = await doRentalRequest(rental, this.state.token);
      commit("SET_RENTAL", response);
    },
    getUsers({ commit }) {
      getUsers(this.state.token)
        .then((response) => {
          commit("SET_USERS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSearchedItems({ commit }, searchRequest) {
      search(searchRequest)
        .then((response) => {
          commit("SET_ITEMS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setRental({ commit }, rental) {
      commit("SET_RENTAL", rental);
    },
    getCurrentSearchSentence({ commit }, searchSentence) {
      commit("SET_CURRENT_SEARCH_SENTENCE", searchSentence);
    },
    async getAllRatings({ dispatch }) {
      dispatch("getAllRatingsOwner", this.state.userInfo.userId);
      dispatch("getAllRatingsUser", this.state.userInfo.userId);
    },
    async getAllRatingsOwner({ commit }, userId) {
      let ratings = await getAllRatingsOwner(userId, this.state.token);

      commit("SET_CURRENT_RATINGS_OWNER", ratings);
    },
    async getAllRatingsUser({ commit }, userId) {
      let ratings = await getAllRatingsUser(userId, this.state.token);

      commit("SET_CURRENT_RATINGS_USER", ratings);
    },
    async storeMeanRating({ commit }) {
      let meanRating = await getMeanRating(this.state.userInfo.userId);
      commit("SET_MEAN_RATING", meanRating);
    },
    async deleteUser({ commit }) {
      await deleteUser(this.state.userInfo.userId, this.state.token);
      commit("CLEAR_LOCALSTORAGE");
    },
  },
  modules: {},
});
