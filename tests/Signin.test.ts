import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Signin from "@/views/Signin.vue";

describe("Signin.vue", () => {
  it("success test", () => {
    const wrapper = mount(Signin);
    expect(wrapper.find(".password").exists()).to.be.true;
  });
});
