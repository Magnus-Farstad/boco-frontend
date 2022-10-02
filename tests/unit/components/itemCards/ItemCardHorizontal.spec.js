import { shallowMount } from "@vue/test-utils";
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";

let mockRouter;
let mockRoute;
let $store;
beforeEach(() => {
  $store = {
    commit: () => {},
    dispatch: () => {},
    state: {
      token: "token",
      userInfo: {
        email: "marius@email.no",
        imageId: 118,
        isPerson: true,
        name: "Marius Klemp Petersen",
        postOffice: "OSLO",
        postalCode: "7030",
        role: "USER",
        streetAddress: "Magnus den Godes gate 8",
        userId: 12,
      },
    },
  };
  mockRouter = {
    push: jest.fn(),
  };
  mockRoute = {
    push: jest.fn(),
  };
});
describe("All tests", () => {
  test("Method goToEdit", () => {
    let wrapper = shallowMount(ItemCardHorizontal, {
      props: {
        item: {
          category: "IT",
          description: "Dette er vue",
          imageId: 168,
          isDeliverable: true,
          isPickupable: true,
          itemId: 101,
          lat: 63.4106,
          lng: 10.3983,
          postOffice: "Trondheim",
          postalCode: "7031",
          price: 0,
          publicityDate: "2022-05-04T07:15:32.000+0000",
          streetAddress: "Holtermanns veg 31B",
          title: "Vue",
          user: {
            email: "magnus@mail.no",
            imageId: 137,
            isPerson: true,
            name: "Magnus Farstad",
            postOffice: "Trondheim",
            postalCode: "7031",
            role: "USER",
            streetAddress: "Holtermanns veg 31B",
            userId: 15,
          },
        },
      },
      global: {
        mocks: {
          $store,
          $router: mockRouter,
          $route: mockRoute,
        },
      },
    });

    wrapper.vm.goToEdit(null);

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: "AddItemComponent",
    });
  });

  describe("Successfully renders outcome of switch", () => {
    test("Successfully returns 'Akseptert'", () => {
      let wrapper = shallowMount(ItemCardHorizontal, {
        props: {
          item: {
            category: "IT",
            description: "Dette er vue",
            imageId: 168,
            isDeliverable: true,
            isPickupable: true,
            itemId: 101,
            lat: 63.4106,
            lng: 10.3983,
            postOffice: "Trondheim",
            postalCode: "7031",
            price: 0,
            publicityDate: "2022-05-04T07:15:32.000+0000",
            streetAddress: "Holtermanns veg 31B",
            title: "Vue",
            user: {
              email: "magnus@mail.no",
              imageId: 137,
              isPerson: true,
              name: "Magnus Farstad",
              postOffice: "Trondheim",
              postalCode: "7031",
              role: "USER",
              streetAddress: "Holtermanns veg 31B",
              userId: 15,
            },
          },
          status: "ACCEPTED",
        },
        global: {
          mocks: {
            $route: mockRoute,
          },
        },
      });
      let expectedStatus = "ACCEPTED";
      let statusReceived = wrapper.vm.statusWrapper;

      expect(statusReceived.text).toEqual(expectedStatus.text);
    });
    test("Successfully returns 'Aktiv'", () => {
      let wrapper = shallowMount(ItemCardHorizontal, {
        props: {
          item: {
            category: "IT",
            description: "Dette er vue",
            imageId: 168,
            isDeliverable: true,
            isPickupable: true,
            itemId: 101,
            lat: 63.4106,
            lng: 10.3983,
            postOffice: "Trondheim",
            postalCode: "7031",
            price: 0,
            publicityDate: "2022-05-04T07:15:32.000+0000",
            streetAddress: "Holtermanns veg 31B",
            title: "Vue",
            user: {
              email: "magnus@mail.no",
              imageId: 137,
              isPerson: true,
              name: "Magnus Farstad",
              postOffice: "Trondheim",
              postalCode: "7031",
              role: "USER",
              streetAddress: "Holtermanns veg 31B",
              userId: 15,
            },
          },
          status: "ACTIVE",
        },
        global: {
          mocks: {
            $route: mockRoute,
          },
        },
      });
      let expectedStatus = "ACTIVE";
      let statusReceived = wrapper.vm.statusWrapper;

      expect(statusReceived.text).toEqual(expectedStatus.text);
    });
    test("Successfully returns 'Avventer'", () => {
      let wrapper = shallowMount(ItemCardHorizontal, {
        props: {
          item: {
            category: "IT",
            description: "Dette er vue",
            imageId: 168,
            isDeliverable: true,
            isPickupable: true,
            itemId: 101,
            lat: 63.4106,
            lng: 10.3983,
            postOffice: "Trondheim",
            postalCode: "7031",
            price: 0,
            publicityDate: "2022-05-04T07:15:32.000+0000",
            streetAddress: "Holtermanns veg 31B",
            title: "Vue",
            user: {
              email: "magnus@mail.no",
              imageId: 137,
              isPerson: true,
              name: "Magnus Farstad",
              postOffice: "Trondheim",
              postalCode: "7031",
              role: "USER",
              streetAddress: "Holtermanns veg 31B",
              userId: 15,
            },
          },
          status: "PENDING",
        },
        global: {
          mocks: {
            $route: mockRoute,
          },
        },
      });
      let expectedStatus = "PENDING";
      let statusReceived = wrapper.vm.statusWrapper;

      expect(statusReceived.text).toEqual(expectedStatus.text);
    });
    test("Successfully returns 'Avvist'", () => {
      let wrapper = shallowMount(ItemCardHorizontal, {
        props: {
          item: {
            category: "IT",
            description: "Dette er vue",
            imageId: 168,
            isDeliverable: true,
            isPickupable: true,
            itemId: 101,
            lat: 63.4106,
            lng: 10.3983,
            postOffice: "Trondheim",
            postalCode: "7031",
            price: 0,
            publicityDate: "2022-05-04T07:15:32.000+0000",
            streetAddress: "Holtermanns veg 31B",
            title: "Vue",
            user: {
              email: "magnus@mail.no",
              imageId: 137,
              isPerson: true,
              name: "Magnus Farstad",
              postOffice: "Trondheim",
              postalCode: "7031",
              role: "USER",
              streetAddress: "Holtermanns veg 31B",
              userId: 15,
            },
          },
          status: "REJECTED",
        },
        global: {
          mocks: {
            $route: mockRoute,
          },
        },
      });
      let expectedStatus = "REJECTED";
      let statusReceived = wrapper.vm.statusWrapper;

      expect(statusReceived.text).toEqual(expectedStatus.text);
    });
    test("Successfully returns 'Kansellert'", () => {
      let wrapper = shallowMount(ItemCardHorizontal, {
        props: {
          item: {
            category: "IT",
            description: "Dette er vue",
            imageId: 168,
            isDeliverable: true,
            isPickupable: true,
            itemId: 101,
            lat: 63.4106,
            lng: 10.3983,
            postOffice: "Trondheim",
            postalCode: "7031",
            price: 0,
            publicityDate: "2022-05-04T07:15:32.000+0000",
            streetAddress: "Holtermanns veg 31B",
            title: "Vue",
            user: {
              email: "magnus@mail.no",
              imageId: 137,
              isPerson: true,
              name: "Magnus Farstad",
              postOffice: "Trondheim",
              postalCode: "7031",
              role: "USER",
              streetAddress: "Holtermanns veg 31B",
              userId: 15,
            },
          },
          status: "CANCELED",
        },
        global: {
          mocks: {
            $route: mockRoute,
          },
        },
      });
      let expectedStatus = "CANCELED";
      let statusReceived = wrapper.vm.statusWrapper;

      expect(statusReceived.text).toEqual(expectedStatus.text);
    });
    test("Successfully returns 'Avsluttet'", () => {
      let wrapper = shallowMount(ItemCardHorizontal, {
        props: {
          item: {
            category: "IT",
            description: "Dette er vue",
            imageId: 168,
            isDeliverable: true,
            isPickupable: true,
            itemId: 101,
            lat: 63.4106,
            lng: 10.3983,
            postOffice: "Trondheim",
            postalCode: "7031",
            price: 0,
            publicityDate: "2022-05-04T07:15:32.000+0000",
            streetAddress: "Holtermanns veg 31B",
            title: "Vue",
            user: {
              email: "magnus@mail.no",
              imageId: 137,
              isPerson: true,
              name: "Magnus Farstad",
              postOffice: "Trondheim",
              postalCode: "7031",
              role: "USER",
              streetAddress: "Holtermanns veg 31B",
              userId: 15,
            },
          },
          status: "FINISHED",
        },
        global: {
          mocks: {
            $route: mockRoute,
          },
        },
      });
      let expectedStatus = "FINISHED";
      let statusReceived = wrapper.vm.statusWrapper;

      expect(statusReceived.text).toEqual(expectedStatus.text);
    });
  });
});
