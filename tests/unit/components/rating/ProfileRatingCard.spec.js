import { shallowMount } from "@vue/test-utils";
import ProfileRatingCard from "@/components/ProfileRatingCard";

let wrapper;
describe("All tests", () => {
  beforeEach(() => {
    wrapper = shallowMount(ProfileRatingCard, {
      props: {
        ratingUser: {
          feedback: "Kjempebraaa vue!",
          rate: 4.5,
          ratingId: 38,
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
              text: "Hei",
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
        ratingOwner: {
          feedback: "Kjempebraaa vue!",
          rate: 3,
          ratingId: 38,
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
              text: "Hei",
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
      },
    });
  });
  test("Successfully renders component", () => {
    const expectedName = "Magnus Farstad";

    const component = wrapper.get(".profileRatingContainer");
    const name = wrapper.get("#profileName");

    expect(component.exists).toBeTruthy;
    expect(name.text()).toEqual(expectedName);
  });
});
