import axios from "axios";
import { doRegisterFeedbackWebPage } from "@/service/apiService";
import { shallowMount } from "@vue/test-utils";
import AddFeedbackWebPageComponent from "@/components/AddFeedbackWebPageComponent";
let $store;
jest.mock("axios");

beforeEach(() => {
  $store = {
    commit: () => {},
    dispatch: () => {},
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

test("Api call is mocked correctly", async () => {
  const expectedFeedbackResponse = { description: "Veldig bra side!" };

  axios.post.mockImplementation(() =>
    Promise.resolve({ data: expectedFeedbackResponse })
  );

  const createFeedbackRequest = {
    description: "Veldig bra side!",
    userId: 2,
  };
  const feedbackResponse = await doRegisterFeedbackWebPage(
    createFeedbackRequest,
    "hei"
  );

  expect(expectedFeedbackResponse.description).toEqual(
    feedbackResponse.data.description
  );
});

test("form is rendered correctly", async () => {
  const wrapper = shallowMount(AddFeedbackWebPageComponent, {
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

  let feedbackContainer = wrapper.get("#FeedbackWebPageContainer");

  let descriptionTitle = wrapper.get("#descriptionTitle");

  let descriptionTextArea = wrapper.get("#description");

  let submitButton = wrapper.get("#publish");

  expect(feedbackContainer.exists()).toBeTruthy;
  expect($store.state.userInfo.userId).toEqual(12);
  expect(descriptionTitle.exists()).toBeTruthy;
  expect(descriptionTitle.text()).toContain("Lag en tilbakemelding:");
  expect(descriptionTextArea.exists()).toBeTruthy;
  expect(submitButton.exists()).toBeTruthy;

});
