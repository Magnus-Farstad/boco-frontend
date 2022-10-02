import FeedbackCard from "@/components/FeedbackCard"
import {mount} from "@vue/test-utils";

describe("FeedbackCard", () => {

    test("If it exist", () => {
        const wrapper = mount(FeedbackCard, {
            props: {
                feedback: {
                    type: Object,
                    required: true,
                    user: {
                        email:"frodepedersen@hotmail.com",
                        imageId:143,
                        isPerson:true,
                        name:"Frode Pedersen",
                        postOffice:"TRONDHEIM",
                        postalCode:"7067",
                        role:"USER",
                        streetAddress:"Thomas Von Westens Gate 2",
                        userId:18
                    },
                },
            },
        })
        expect(wrapper.exists()).toBe(true)
    })
    test("If h4 contains the text", () => {
        const wrapper = mount(FeedbackCard, {
            props: {
                feedback: {
                    type: Object,
                    required: true,
                    user: {
                        email:"frodepedersen@hotmail.com",
                        imageId:143,
                        isPerson:true,
                        name:"Frode Pedersen",
                        postOffice:"TRONDHEIM",
                        postalCode:"7067",
                        role:"USER",
                        streetAddress:"Thomas Von Westens Gate 2",
                        userId:18
                    },
                },
            },
        })
        expect(wrapper.find("h4").text()).toBe("Tilbakemelding:")
    })
})