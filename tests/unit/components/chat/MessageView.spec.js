import { mount } from "@vue/test-utils";
import MessageView from "@/views/MessageView";

let $store;
let wrapper;
let connectChat;
let ratingSent;
let mockRoute;
beforeEach(() => {
  mockRoute = {
    push: jest.fn(),
  };
  $store = {
    commit: () => {},
    dispatch: () => {},
    state: {
      currentRental: {
        deliveryInfo: "DELIVERED",
        endDate: "2021-11-05T01:00:00.000+02:00",
        item: {
          category: "IT",
          description: "Dette er Vue. Vue er bedre enn React.",
          imageId: 176,
          isDeliverable: true,
          isPickupable: true,
          itemId: 107,
          lat: 63.4106,
          lng: 10.3983,
          postOffice: "Trondheim",
          postalCode: "7031",
          price: 400,
          publicityDate: "2022-05-06T09:02:53.000+02:00",
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
        lastMessage: {
          date: "2022-05-06T12:27:33.000+02:00",
          isByUser: true,
          messageId: 246,
          text: "Jeg vil leie takk. 1-5",
          userId: 12,
        },
        rentalId: 122,
        startDate: "2021-11-02T01:00:00.000+02:00",
        status: "FINISHED",
        user: {
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
      userInfo: {
        userId: 1,
      },
    },
  };
  connectChat = jest.spyOn(MessageView.methods, "connectChat");
  ratingSent = jest.spyOn(MessageView.methods, "ratingSent");
  wrapper = mount(MessageView, {
    global: {
      mocks: {
        $store,
        $route: mockRoute,
      },
    },
  });
});
describe("All tests", () => {
  test("Component renders", () => {
    const component = wrapper.get(".container");
    wrapper.vm.updateRequestMessage(null);

    expect(component.exists).toBeTruthy;
    expect(connectChat).toHaveBeenCalledTimes(1);
  });
});
