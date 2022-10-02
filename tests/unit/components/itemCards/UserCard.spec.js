import { shallowMount } from "@vue/test-utils";
import UserCard from "@/components/UserCard";

let $store;

beforeEach(() => {
  $store = {
    commit: () => {},
    state: {
      token: "token",
      userInfo: {
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
  };
});

describe("All tests", () => {
  test("Successfully renders UserCard, when given a prop", async () => {
    const wrapper = shallowMount(UserCard, {
      props: {
        user: {
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
      global: {
        mocks: {
          $store,
        },
      },
    });

    const card = wrapper.get(".userCardContainer");
    const userRole = "USER";
    const button = wrapper.find("#updateRoleUser");

    expect($store.state.userInfo.role).toEqual(userRole);
    expect(card.exists()).toBeTruthy;
    expect(button.exists()).toBeTruthy;
  });

  test("method updateRoleUser work", () => {
    const wrapper = shallowMount(UserCard, {
      props: {
        user: {
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
      global: {
        mocks: {
          $store,
        },
      },
    });

    wrapper.vm.updateRoleUser();
    const submittedEvent = wrapper.emitted("updateRoleUser");
    const payload = 15;

    expect(submittedEvent).toHaveLength(1);
    expect(wrapper.emitted("updateRoleUser")[0][0]).toStrictEqual(payload);
  });
});