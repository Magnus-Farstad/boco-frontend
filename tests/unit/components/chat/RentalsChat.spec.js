import { shallowMount } from "@vue/test-utils";
import RentalsActive from "@/views/Rentals/RentalsActive";

describe("All tests", () => {
  describe("Tests for active chat rendering", () => {
    let $store;
    beforeEach(() => {
      $store = {
        commit: () => {},
        dispatch: () => {},
        state: {
          myRentalsActive: [
            {
              id: 1,
              item: {
                imageId: 3,
                description: "This is an item",
                user: {
                  name: "Navn Navnesen",
                },
              },
            },
          ],
        },
      };
    });
    test("Successfully renders existing chat", () => {
      const wrapper = shallowMount(RentalsActive, {
        computed: {
          allRentals() {
            return {
              rental: {
                rentalId: 2,
              },
            };
          },
        },
        global: {
          mocks: {
            $store,
          },
        },
      });
      let chatCard = wrapper.find("#chatCard");

      expect(chatCard.exists()).toBeTruthy;
    });
    test("Unsuccessfully renders non-existing chat", () => {
      const $store = {
        commit: () => {},
        dispatch: () => {},
        state: {
          myRentals: [],
        },
      };
      const wrapper = shallowMount(RentalsActive, {
        computed: {
          allRentals() {
            return {
              rental: {
                rentalId: 2,
              },
            };
          },
        },
        global: {
          mocks: {
            $store,
          },
        },
      });
      let chatCard = wrapper.find("#chatCard");

      expect(chatCard.exists()).toBeFalsy;
    });
  });
  describe("Tests for archived chat rendering", () => {
    let $store;
    beforeEach(() => {
      $store = {
        commit: () => {},
        dispatch: () => {},
        state: {
          myRentalsFinished: [
            {
              id: 1,
              item: {
                imageId: 3,
                description: "This is an item",
                user: {
                  name: "Navn Navnesen",
                },
              },
            },
          ],
        },
      };
    });

    test("Successfully renders existing chat", () => {
      const wrapper = shallowMount(RentalsActive, {
        computed: {
          allRentals() {
            return {
              rental: {
                rentalId: 2,
              },
            };
          },
        },
        global: {
          mocks: {
            $store,
          },
        },
      });
      let chatCard = wrapper.find("#chatCard");

      expect(chatCard.exists()).toBeTruthy;
    });
    test("Unsuccessfully renders non-existing chat", () => {
      const $store = {
        commit: () => {},
        dispatch: () => {},
        state: {
          myRentals: [],
        },
      };
      const wrapper = shallowMount(RentalsActive, {
        computed: {
          allRentals() {
            return {
              rental: {
                rentalId: 5,
              },
            };
          },
        },
        global: {
          mocks: {
            $store,
          },
        },
      });
      let chatCard = wrapper.find("#chatCard");

      expect(chatCard.exists()).toBeFalsy;
    });
  });
});
