import { shallowMount } from "@vue/test-utils";
import ChatCard from "@/components/ChatCard";

let wrapper;
let $store;
let mockRouter;
beforeEach(() => {
  mockRouter = {
    push: jest.fn(),
  };
});
describe("All tests", () => {
  describe("Successfully renders component with methods", () => {
    beforeEach(() => {
      $store = {
        commit: () => {},
        dispatch: () => {},
        state: {
          userInfo: {
            email: "magnus@mail.no",
            imageId: null,
            isPerson: true,
            name: "Magnus Farstad",
            postOffice: "Trondheim",
            postalCode: "7031",
            role: "USER",
            streetAddress: "Holtermanns veg 31B",
            userId: 15,
          },
        },
      };
      mockRouter = {
        push: jest.fn(),
      };
      wrapper = shallowMount(ChatCard, {
        props: {
          rental: {
            deliveryInfo: "DELIVERED",
            endDate: "2021-11-05T01:00:00.000+02:00",
            item: {
              category: "IT",
              description: "Dette er Vue. Vue er bedre enn React.",
              imageId: 176,
              isDeliverable: true,
              isPickupable: true,
              itemId: 107,
              lat: 63.4106,
              lng: 10.3983,
              postOffice: "Trondheim",
              postalCode: "7031",
              price: 400,
              publicityDate: "2022-05-06T09:02:53.000+02:00",
              streetAddress: "Holtermanns veg 31B",
              title: "Vue",
              user: {
                email: "magnus@mail.no",
                imageId: 137,
                isPerson: true,
                name: "Magnus Farstad",
                postOffice: "Trondheim",
                postalCode: "7031",
                role: "USER",
                streetAddress: "Holtermanns veg 31B",
                userId: 15,
              },
            },
            lastMessage: {
              date: "2022-05-06T12:27:33.000+02:00",
              isByUser: true,
              messageId: 246,
              text: "Jeg vil leie takk. 1-5",
              userId: 12,
            },
            rentalId: 122,
            startDate: "2021-11-02T01:00:00.000+02:00",
            status: "FINISHED",
            user: {
              email: "marius@email.no",
              imageId: 118,
              isPerson: true,
              name: "Marius Klemp Petersen",
              postOffice: "OSLO",
              postalCode: "7030",
              role: "USER",
              streetAddress: "Magnus den Godes gate 8",
              userId: 12,
            },
          },
        },
        global: {
          mocks: {
            $store,
            $router: mockRouter,
          },
        },
      });
    });
    test("Component renders", () => {
      const component = wrapper.get(".chatCardContainer");

      expect(component.exists).toBeTruthy;
    });
    test("Method goToChat", () => {
      wrapper.vm.goToChat();

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
        name: "MessageView",
      });
    });
    describe("Successfully renders outcome of switch", () => {
      test("Successfully returns 'Akseptert'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "ACCEPTED",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "Akseptert";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
      test("Successfully returns 'Aktiv'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "ACTIVE",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "Aktiv";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
      test("Successfully returns 'Avventer'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "PENDING",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "Avventer";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
      test("Successfully returns 'Avvist'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "REJECTED",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "Avvist";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
      test("Successfully returns 'Kansellert'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "CANCELED",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "Kansellert";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
      test("Successfully returns 'Avsluttet'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "FINISHED",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "Avsluttet";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
      test("Successfully returns 'Default'", () => {
        let wrapper = shallowMount(ChatCard, {
          props: {
            rental: {
              deliveryInfo: "DELIVERED",
              endDate: "2021-11-05T01:00:00.000+02:00",
              item: {
                category: "IT",
                description: "Dette er Vue. Vue er bedre enn React.",
                imageId: 176,
                isDeliverable: true,
                isPickupable: true,
                itemId: 107,
                lat: 63.4106,
                lng: 10.3983,
                postOffice: "Trondheim",
                postalCode: "7031",
                price: 400,
                publicityDate: "2022-05-06T09:02:53.000+02:00",
                streetAddress: "Holtermanns veg 31B",
                title: "Vue",
                user: {
                  email: "magnus@mail.no",
                  imageId: 137,
                  isPerson: true,
                  name: "Magnus Farstad",
                  postOffice: "Trondheim",
                  postalCode: "7031",
                  role: "USER",
                  streetAddress: "Holtermanns veg 31B",
                  userId: 15,
                },
              },
              lastMessage: {
                date: "2022-05-06T12:27:33.000+02:00",
                isByUser: true,
                messageId: 246,
                text: "Jeg vil leie takk. 1-5",
                userId: 12,
              },
              rentalId: 122,
              startDate: "2021-11-02T01:00:00.000+02:00",
              status: "",
              user: {
                email: "marius@email.no",
                imageId: 118,
                isPerson: true,
                name: "Marius Klemp Petersen",
                postOffice: "OSLO",
                postalCode: "7030",
                role: "USER",
                streetAddress: "Magnus den Godes gate 8",
                userId: 12,
              },
            },
          },
          global: {
            mocks: {
              $store,
            },
          },
        });
        let expectedStatus = "";
        let statusReceived = wrapper.vm.statusWrapped;

        expect(statusReceived).toEqual(expectedStatus);
      });
    });
  });
});
