import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

const vetleHost = "10.22.0.96";
let host = "localhost";
/*
    //Import these
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";


    // Replace with store values
    const messageRequest = {
        "text" : text,
        "userId" : userId,
        "rentalId" : rentalId
    }

    let stompClient;

    function connect(rentalId) {
      const socket = new SockJS('http://" + host + ":8085/api/chat-connect');
      stompClient = Stomp.over(socket);

      stompClient.connect({}, (frame) => {
        stompClient.subscribe('/chat-outgoing/' + rentalId, (messageOutput) => {
          
          // Handle message responses here
          console.log(JSON.parse(messageOutput.body));

        });
      });
    }
    
    function send(messageRequest) {
      stompClient.send('/chat-incoming', JSON.stringify(messageRequest), {});
    }
    */

let stompClient;

export function connect(rentalId, callback) {
  const socket = new SockJS("http://" + host + ":8085/api/chat-connect");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, () => {
    stompClient.subscribe("/chat-outgoing/" + rentalId, callback);
  });
}

export function getChat(rentalId, token) {
  return axios
    .get("http://" + host + ":8085/api/chat/get/" + rentalId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function send(messageRequest) {
  stompClient.send("/chat-incoming", JSON.stringify(messageRequest), {});
}

export async function doLogin(email, password) {
  const loginRequest = {
    email: email,
    password: password,
  };

  return axios
    .post("http://" + host + ":8085/api/user/login", loginRequest)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegistration(registerUserRequest) {
  return axios
    .post("http://" + host + ":8085/api/user/register", registerUserRequest)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doEditUser(editUserRequest, userId, token) {
  return axios
    .put(
      "http://" + host + ":8085/api/user/update/" + userId,
      editUserRequest,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegisterItem(itemRequest, token) {
  return axios
    .post("http://" + host + ":8085/api/item/register", itemRequest, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRentalRequest(registerRentalRequest, token) {
  return axios
    .post(
      "http://" + host + ":8085/api/rental/register",
      registerRentalRequest,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

class UploadFilesService {
  upload(file, token) {
    let formData = new FormData();

    formData.append("image", file);

    return axios.post("http://" + host + ":8085/api/image/upload", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new UploadFilesService();
export function getItems(page, pageSize) {
  return axios
    .get("http://" + host + ":8085/api/item/all/" + page + "/" + pageSize)
    .then((response) => {
      return response.data;
    });
}

export async function doRegisterFeedbackWebPage(feedbackRequest, token) {
  return axios
    .post(
      "http://" + host + ":8085/api/feedbackWebPage/registerFeedback",
      feedbackRequest,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getFeedbacks(token) {
  return axios
    .get("http://" + host + ":8085/api/feedbackWebPage/getFeedbacks", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function updateItem(item, itemId, token) {
  return axios
    .put("http://" + host + ":8085/api/item/update/" + itemId, item, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function deleteItem(itemId, token) {
  return axios
    .delete("http://" + host + ":8085/api/item/delete/" + itemId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getMyItems(userId, token) {
  return axios
    .get("http://" + host + ":8085/api/item/get-my/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}
export function getAllMyRentals(userId, token) {
  return axios
    .get("http://" + host + ":8085/api/rental/get-my-all/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getMyRentals(userId, token, status) {
  return axios
    .get(
      "http://" + host + ":8085/api/rental/get-my/" + userId + "/" + status,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
}
export function getMyRentalsOwner(userId, token, status) {
  return axios
    .get(
      "http://" +
        host +
        ":8085/api/rental/get-my-owner/" +
        userId +
        "/" +
        status,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
}
export function getMyNotifications(userId, token) {
  return axios
    .get("http://" + host + ":8085/api/notification/get-my/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getRentalsForItem(itemId, token) {
  return axios
    .get("http://" + host + ":8085/api/rental/for-item/" + itemId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function acceptRental(rentalId, token) {
  return axios
    .put("http://" + host + ":8085/api/rental/accept/" + rentalId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function rejectRental(rentalId, token) {
  return axios
    .put("http://" + host + ":8085/api/rental/reject/" + rentalId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function cancelRental(rentalId, token) {
  return axios
    .put("http://" + host + ":8085/api/rental/cancel/" + rentalId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}
export async function getOccupiedDates(itemId, token) {
  return axios
    .get("http://" + host + ":8085/api/item/get-occupied-dates/" + itemId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response;
    });
}
export function changeNotification(notificationId, token) {
  return axios
    .put(
      "http://" + host + ":8085/api/notification/update/" + notificationId,
      null,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
}
export function getUsers(token) {
  return axios
    .get("http://" + host + ":8085/api/user/getUsers", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
export function doRating(ratingRequest, token) {
  return axios
    .post("http://" + host + ":8085/api/rating/register", ratingRequest, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function updateRoleUsers(token, userId) {
  return axios
    .put("http://" + host + ":8085/api/user/updateUserAdmin/" + userId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function search(searchRequest) {
  return axios
    .put("http://" + host + ":8085/api/item/search", searchRequest)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function getAllRatingsUser(userId, token) {
  return axios
    .get("http://" + host + ":8085/api/rating/get-my-user/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getAllRatingsOwner(userId, token) {
  return axios
    .get("http://" + host + ":8085/api/rating/get-my-owner/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}
export function getMeanRating(userId) {
  return axios
    .get("http://" + host + ":8085/api/rating/getMeanRating/" + userId)
    .then((response) => {
      return response.data;
    });
}

export function getSent(rentalId, userId, token) {
  return axios
    .get(
      "http://" + host + ":8085/api/rating/get-sent/" + userId + "/" + rentalId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response;
    });
}
export function deleteUser(userId, token) {
  return axios
    .delete("http://" + host + ":8085/api/user/delete/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response;
    });
}
