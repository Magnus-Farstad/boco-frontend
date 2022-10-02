import LoginComponent from "@/components/LoginComponent";
import { flushPromises, shallowMount } from "@vue/test-utils";
import { doLogin } from "@/service/apiService";

describe("LoginComponent", () => {
  let $store;
  beforeEach(() => {
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        token: "token",
        userInfo: {
          email: "frode@test",
          imageId: 200,
          isPerson: true,
          name: "Frode Pedersen",
          postOffice: "Trondheim",
          postalCode: "7067",
          role: "USER",
          streetAddress: "Thomas Von Westens gate 2",
          userId: 5,
        },
      },
    };
  });
  test("If the page renders", () => {
    const wrapper = shallowMount(LoginComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("does h1 exist", () => {
    const wrapper = shallowMount(LoginComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    expect(wrapper.find("h1").text()).toBe("Velkommen!");
  });

  test("sets the correct user to logged in", async () => {
    const wrapper = shallowMount(LoginComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    expect(wrapper.vm.$data.email).toBe("");
  });

  test("When login button is clicked and you are a registered user", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(doLogin, {
      id: 1,
      email: "test@test.no",
      passord: "passord",
      global: {
        mocks: {
          $store,
          $router: mockRouter,
        },
      },
    });
    await wrapper.find();
    expect(mockRouter.push).toHaveBeenCalledTimes(0);
  });

  //test("When you click logg in without registered user, /registration should come up", async () =>{
  //    const wrapper = shallowMount(LoginComponent, {

  //    })
  //})
});
