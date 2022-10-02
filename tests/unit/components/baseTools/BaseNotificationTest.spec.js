import {flushPromises, mount, shallowMount} from "@vue/test-utils";
import BaseNotification from "@/components/baseTools/BaseNotification"

let $store
beforeEach(()=> {
    $store = {
        state: {
            props: {
                notification: {
                    rental: {
                        rentalId: 74,
                        status: null,
                        startDate: "startDate",
                        endDate: "endDate",
                        item: {
                            category:"Sportsutstyr",
                            description:"gruppesett.",
                            imageId:192,
                            isDeliverable:true,
                            isPickupable:true,
                            itemId:120,
                            lat:63.4373,
                            lng:10.4354,
                            postOffice:"TRONDHEIM",
                            postalCode:"7067",
                            price:400,
                            publicityDate:"2022-05-06T07:41:13.000+00:00",
                            streetAddress:"Thomas Von Westens Gate 2",
                            title:"Landeveissykkel"
                        },
                    },
                },
                status: "ACCEPTED",
            },
        }
    }
})

describe("BaseNotifications", () => {

    test("If it renders", () => {
        const wrapper = mount(BaseNotification, {
            props: {
                notification: {
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper).toBeTruthy
    })
})

describe("Notification switch", () => {
    test("When case is ACCEPTED", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "ACCEPTED",
                    text:"noe",
                    status: "ACCEPTED",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "ACCEPTED"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is REJECTED", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "REJECTED",
                    text:"noe",
                    status: "REJECTED",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "REJECTED"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is CANCELED", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "CANCELED",
                    text:"noe",
                    status: "CANCELED",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "CANCELED"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is REQUEST", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "REQUEST",
                    text:"noe",
                    status: "REQUEST",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "REQUEST"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is SEND_RATING_OWNER", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "SEND_RATING_OWNER",
                    text:"noe",
                    status: "SEND_RATING_OWNER",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "SEND_RATING_OWNER"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is SEND_RATING_USER", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "SEND_RATING_USER",
                    text:"noe",
                    status: "SEND_RATING_USER",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "SEND_RATING_USER"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is RECEIVED_RATING_OWNER", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "RECEIVED_RATING_OWNER",
                    text:"noe",
                    status: "RECEIVED_RATING_OWNER",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "RECEIVED_RATING_OWNER"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
    test("When case is RECEIVED_RATING_USER", async () => {
        const wrapper = shallowMount(BaseNotification, {
            props: {
                notification: {
                    notificationStatus: "RECEIVED_RATING_USER",
                    text:"noe",
                    status: "RECEIVED_RATING_USER",
                    type: Object,
                    required: true,
                    rental: {
                        $store,
                        item: $store
                    },
                },
            },
        })
        let notificationStatus = "RECEIVED_RATING_USER"
        let notification = wrapper.vm.notificationText

        flushPromises()

        expect(notification.text).toEqual(notificationStatus.text);
    })
})

