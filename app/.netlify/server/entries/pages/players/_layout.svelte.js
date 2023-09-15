import { c as create_ssr_component } from "../../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex"><div class="container mx-auto px-4 mt-16 ml-24">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
