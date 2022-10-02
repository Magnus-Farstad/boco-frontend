import { shallowMount } from "@vue/test-utils";
import MyAds from "@/views/MyAds";

let $store;
let mockRouter;
let wrapper;
describe("All tests", () => {
  beforeEach(() => {
    mockRouter = {
      push: jest.fn(),
    };
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        myItems: [
          {
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
        ],
      },
    };
    wrapper = shallowMount(MyAds, {
      global: {
        mocks: {
          $router: mockRouter,
          $store,
        },
      },
    });
  });
  test("Successfully renders component", () => {
    const component = wrapper.get(".container");

    expect(component.exists).toBeTruthy;
  });
  test("Method goToRentals", () => {
    wrapper.vm.goToRentals({
      rentalId: 2,
    });

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: "RentalsReceived",
    });
  });
});
