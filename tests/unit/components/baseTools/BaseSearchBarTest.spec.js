import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
import { mount } from "@vue/test-utils";

describe("BaseSearchBar", () => {
  test("If it exist", () => {
    const wrapper = mount(BaseSearchBar, {
      props: {
        label: {
          type: "NOE",
          default: "",
        },
        modelValue: {
          type: [String, Number],
          default: "",
        },
        error: {
          type: "NOE",
          default: "",
        },
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
