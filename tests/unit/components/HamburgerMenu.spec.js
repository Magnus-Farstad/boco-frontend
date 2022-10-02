import { shallowMount } from "@vue/test-utils";
import HamburgerMenu from "@/components/HamburgerMenu";

let $store;
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
describe("Successfully renders data when logged in", () => {
  test("Profile image and name renders", () => {
    const wrapper = shallowMount(HamburgerMenu, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let image = wrapper.find(".actualProfileImage");
    let name = wrapper.find(".name");

    expect(image.exists()).toBeTruthy;
    expect(name.exists()).toBeTruthy;
  });
  test("Menu routes renders", () => {
    const wrapper = shallowMount(HamburgerMenu, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    let menus = wrapper.find("[data-testid='loggedInMenus']");
    let logOut = wrapper.find("[data-testid='logOut']");

    expect(menus.exists()).toBeTruthy;
    expect(logOut.exists()).toBeTruthy;
  });
});

describe("Methods tests", () => {
  let mockRouter;
  let wrapper;
  describe("Methods when logged in", () => {
    beforeEach(() => {
      mockRouter = {
        push: jest.fn(),
      };
      wrapper = shallowMount(HamburgerMenu, {
        global: {
          mocks: {
            $store,
            $router: mockRouter,
          },
        },
      });
    });
    test("Method emitRouteChange", () => {
      wrapper.vm.emitRouteChange("AddItemComponent");
      const submittedEvent = wrapper.emitted("routeChange");
      const payload = undefined;

      expect(submittedEvent).toHaveLength(1);
      expect(wrapper.emitted("routeChange")[0][0]).toStrictEqual(payload);

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
        name: "AddItemComponent",
      });
    });
    test("Method logout", () => {
      wrapper.vm.logout();
      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({ name: "HomeView" });
    });
    test("Method goMyProfile when logged in", () => {
      wrapper.vm.goMyProfile();

      const submittedEvent = wrapper.emitted("routeChange");
      const payload = undefined;

      expect(submittedEvent).toHaveLength(1);
      expect(wrapper.emitted("routeChange")[0][0]).toStrictEqual(payload);

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({ name: "MyProfile" });
    });
    test("Method goSendFeedback when logged in", () => {
      wrapper.vm.goSendFeedback();

      const submittedEvent = wrapper.emitted("routeChange");
      const payload = undefined;

      expect(submittedEvent).toHaveLength(1);
      expect(wrapper.emitted("routeChange")[0][0]).toStrictEqual(payload);

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
        name: "AddFeedbackWebPageComponent",
      });
    });
  });
  describe("Methods when logged out", () => {
    beforeEach(() => {
      mockRouter = {
        push: jest.fn(),
      };
      $store = {
        commit: () => {},
        dispatch: () => {},
        state: {
          token: null,
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
      wrapper = shallowMount(HamburgerMenu, {
        global: {
          mocks: {
            $store,
            $router: mockRouter,
          },
        },
      });
    });
    test("Method goMyProfile when logged out", () => {
      wrapper = shallowMount(HamburgerMenu, {
        global: {
          mocks: {
            $store,
            $router: mockRouter,
          },
        },
      });
      wrapper.vm.goMyProfile();

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({ name: "LoginComponent" });
    });
    test("Method goSendFeedback when logged in", () => {
      wrapper.vm.goSendFeedback();

      const submittedEvent = wrapper.emitted("routeChange");
      const payload = undefined;

      expect(submittedEvent).toHaveLength(1);
      expect(wrapper.emitted("routeChange")[0][0]).toStrictEqual(payload);

      expect(mockRouter.push).toHaveBeenCalledTimes(1);
      expect(mockRouter.push).toHaveBeenCalledWith({
        name: "LoginComponent",
      });
    });
  });
});
