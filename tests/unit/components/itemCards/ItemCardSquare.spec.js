import { shallowMount } from "@vue/test-utils";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";

test("Successfully renders card, when given a prop", () => {
  const wrapper = shallowMount(ItemCardSquare, {
    props: {
      item: {
        category: "IT",
        description: "Dette er vue",
        imageId: 168,
        isDeliverable: true,
        isPickupable: true,
        itemId: 101,
        lat: 63.4106,
        lng: 10.3983,
        postOffice: "Trondheim",
        postalCode: "7031",
        price: 0,
        publicityDate: "2022-05-04T07:15:32.000+00:00",
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
    },
  });

  const card = wrapper.find(".itemCardContainer");

  expect(card.exists()).toBeTruthy;
});
