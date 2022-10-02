import BaseCheckbox from "@/components/baseTools/BaseCheckbox";
import { mount } from "@vue/test-utils";

describe("BeseCheckbox", () => {
  test("If the box exist", () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        label: {
          type: String,
          default: "",
        },
        modelValue: {
          type: Boolean,
          default: false,
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toBeTruthy;
  });
});
