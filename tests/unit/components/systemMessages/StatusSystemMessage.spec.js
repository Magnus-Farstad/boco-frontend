import { shallowMount } from "@vue/test-utils";
import StatusSystemMessage from "@/components/systemMessages/StatusSystemMessage";

describe("All tests", () => {
  test("Component renders", () => {
    let wrapper = shallowMount(StatusSystemMessage, {
      props: {
        rental: {
          status: "ACCEPTED",
        },
      },
    });
    const component = wrapper.get("#statusMessageContainer");

    expect(component.exists).toBeTruthy;
  });
  describe("Successfully renders outcome of switch", () => {
    test("Successfully returns 'Akseptert'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "ACCEPTED",
          },
        },
      });
      let expectedStatus = "Akseptert";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
    test("Successfully returns 'Aktiv'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "ACTIVE",
          },
        },
      });
      let expectedStatus = "Aktiv";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
    test("Successfully returns 'Avventer'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "PENDING",
          },
        },
      });
      let expectedStatus = "Avventer";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
    test("Successfully returns 'Avvist'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "REJECTED",
          },
        },
      });
      let expectedStatus = "Avvist";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
    test("Successfully returns 'Kansellert'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "CANCELED",
          },
        },
      });
      let expectedStatus = "Kansellert";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
    test("Successfully returns 'Avsluttet'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "FINISHED",
          },
        },
      });
      let expectedStatus = "Avsluttet";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
    test("Successfully returns 'Default'", () => {
      let wrapper = shallowMount(StatusSystemMessage, {
        props: {
          rental: {
            status: "",
          },
        },
      });
      let expectedStatus = "Default";
      let statusReceived = wrapper.vm.status;

      expect(statusReceived).toEqual(expectedStatus);
    });
  });
});
