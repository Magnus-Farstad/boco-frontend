import MyRentals from "@/views/Rentals/MyRentals"
import {mount} from "@vue/test-utils";

describe("MyRentals", () => {
    let $store;
    beforeEach(() => {
        $store = {
            commit: () => {},
            dispatch: () => {},
        };
    });

    test("If it exist", ()=> {
        const wrapper = mount(MyRentals, {
            global: {
                mocks: {
                    $store
                }
            }
        })
        expect(wrapper.exists()).toBe(true)
    })
    test("If h1 contains text", () => {
        const wrapper = mount(MyRentals, {
            global: {
                mocks: {
                    $store
                }
            }
        })
        expect(wrapper.find("h1").text()).toBe("Alle chatter")
    })
})