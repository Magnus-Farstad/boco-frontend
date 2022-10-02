import { shallowMount } from "@vue/test-utils";
import GiveRatingView from "@/views/GiveRatingView";

let $store;
beforeEach(() => {
  $store = {
    commit: () => {},
    dispatch: () => {},
    state: {
      currentRental: {
        deliveryInfo: "PICKUP",
        endDate: "2022-05-04T00:00:00.000+02:00",
        item: {
          category: "Friluftsliv",
          description:
            "Fint to-manns telt. Lett og pakke sammen. Perfekt til festivalbruk",
          imageId: 180,
          isDeliverable: false,
          isPickupable: true,
          itemId: 111,
          lat: 63.418,
          lng: 10.3953,
          postOffice: "OSLO",
          postalCode: "7030",
          price: 120,
          publicityDate: "2022-05-06T09:06:37.000+02:00",
          streetAddress: "Magnus den Godes gate 8",
          title: "Telt",
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
        lastMessage: {
          date: "2022-05-06T09:47:36.000+02:00",
          isByUser: true,
          messageId: 230,
          text: "hei",
          userId: 15,
        },
        rentalId: 115,
        startDate: "2022-05-03T00:00:00.000+02:00",
        status: "FINISHED",
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
});
describe("Successfully renders data when logged in", () => {
  test("currentRental renders", () => {
    const wrapper = shallowMount(GiveRatingView, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let rental = wrapper.vm.rental;
    expect(wrapper.exists()).toBe(true);

    const expectedRentalId = 115;
    expect(rental.rentalId).toEqual(expectedRentalId);
  });
  test("If h1 contains text", () => {
    const wrapper = shallowMount(GiveRatingView, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    expect(wrapper.find("h1").text()).toBe("Vurder leieforholdet med:");
  });
  test("Data renders", () => {
    const wrapper = shallowMount(GiveRatingView, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    let personContainer = wrapper.find("[personContainer]");

    expect(personContainer.exists()).toBeTruthy;
  });
});
