import FooterComponent from "@/components/FooterComponent"
import {mount} from "@vue/test-utils";
import te from "@vuepic/vue-datepicker";

describe("FooterComponent", () => {
    const wrapper = mount(FooterComponent)

    test("If it exist", () => {
        expect(wrapper.exists()).toBeTruthy

    })
    test("If div contain text", () => {
        expect(wrapper.find("div").text()).toBe("Her er masse info")
    })
})