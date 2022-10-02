import { shallowMount } from "@vue/test-utils";
import RatingSystemMessage from "@/components/systemMessages/RatingSystemMessage";

let mockRouter;
beforeEach(() => {
  mockRouter = {
    push: jest.fn(),
  };
});
describe("Tests", () => {
  test("Successfully renders, when given a prop", () => {
    const wrapper = shallowMount(RatingSystemMessage, {
      props: {
        name: "Navn Navnesen",
      },
    });
    const expectedMessage = "Navn Navnesen";
    const message = wrapper.find("strong");
    const component = wrapper.find(".systemMessageContainer");

    expect(component.exists()).toBeTruthy;
    expect(message.text()).toEqual(expectedMessage);
  });
  test("Method goToRating", () => {
    const wrapper = shallowMount(RatingSystemMessage, {
      props: {
        name: "Navn Navnesen",
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    wrapper.vm.goToRating();

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: "GiveRating",
    });
  });
});
