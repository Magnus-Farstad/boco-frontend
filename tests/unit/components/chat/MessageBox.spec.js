import { shallowMount } from "@vue/test-utils";
import MessageBox from "@/components/MessageBox";

let $store;
let wrapper;
describe("All tests", () => {
  beforeEach(() => {
    $store = {
      state: {
        userInfo: {
          userId: 1,
        },
      },
    };
    wrapper = shallowMount(MessageBox, {
      props: {
        message: "Message",
        imageId: 3,
        userId: 1,
      },
      global: {
        mocks: {
          $store,
        },
      },
    });
  });
  test("Component renders with correct message", () => {
    const component = wrapper.find(".messageContainer");
    const message = wrapper.find(".messageDefault");
    const expectedMessage = "Message";

    expect(component.exists).toBeTruthy;
    expect(message.exists).toBeTruthy;
    expect(message.text()).toEqual(expectedMessage);
  });
  describe("Tests for outcome of computed", () => {
    test("Successfully returns true when user is me", () => {
      const computedResponse = wrapper.vm.isMe;
      const expectedReturn = true;

      expect(computedResponse.valueOf()).toEqual(expectedReturn);
    });
    test("Successfully returns false when user is not me", () => {
      const wrapper = shallowMount(MessageBox, {
        props: {
          message: "Message",
          imageId: 3,
          userId: 2,
        },
        global: {
          mocks: {
            $store,
          },
        },
      });
      const computedResponse = wrapper.vm.isMe;
      const expectedReturn = false;

      expect(computedResponse.valueOf()).toEqual(expectedReturn);
    });
  });
});
