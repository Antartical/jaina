import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Signin from "@/views/Signin.vue";

describe("Signin.vue", () => {
  it("success test", () => {
    const wrapper = shallowMount(Signin, {});
    expect(wrapper);
  });
});
