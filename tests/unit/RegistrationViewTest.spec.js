import RegistrationView from "@/views/RegistrationView"
import {mount} from "@vue/test-utils";

describe("RegistrationView", ()=> {
    test("If it exist", () => {
        const wrapper = mount(RegistrationView)

        expect(wrapper.exists()).toBe(true)
    })
})