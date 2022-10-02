import NotFoundView from "@/views/NotFoundView"
import {mount} from "@vue/test-utils";

describe("NotFoundView", ()=> {
    test("If it exist", () => {
        const wrapper = mount(NotFoundView)

        expect(wrapper.exists()).toBe(true)
    })
    test("If h2 contains text", () => {
        const wrapper = mount(NotFoundView)

        expect(wrapper.find("h2").text()).toBe("Page Not Found!")
    })
})

