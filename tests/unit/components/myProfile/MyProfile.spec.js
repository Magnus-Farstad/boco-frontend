import { shallowMount } from "@vue/test-utils";
import MyProfile from "@/views/MyProfile";

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
        userInfo: {
          email: "magnus@mail.no",
          imageId: null,
          isPerson: true,
          name: "Magnus Farstad",
          postOffice: "Trondheim",
          postalCode: "7031",
          role: "USER",
          streetAddress: "Holtermanns veg 31B",
          userId: 15,
        },
        meanRating: 5,
      },
    };
    wrapper = shallowMount(MyProfile, {
      global: {
        mocks: {
          $store,
          $router: mockRouter,
        },
      },
    });
  });
  test("Successfully renders component", () => {
    const expectedName = "Magnus Farstad";

    const component = wrapper.get(".container");
    const name = wrapper.get(".name");

    expect(component.exists).toBeTruthy;
    expect(name.text()).toEqual(expectedName);
  });
  test("Computed hasProfileImage returns expected value", () => {
    const expectedValue = false;
    const value = wrapper.vm.hasProfileImage;
    expect(value).toEqual(expectedValue);
  });
  describe("Methods", () => {
    test("Method goToPage", () => {
      wrapper.vm.goToPage("MyPage");

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
        name: "MyPage",
      });
    });
    test("Method goToRatings", () => {
      const expectedPayload = 15;

      wrapper.vm.goToRatings();

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
        name: "RatingsView",
        params: { userId: expectedPayload },
      });
    });
  });
});
