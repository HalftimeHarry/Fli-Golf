import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { A as AdminNavigation } from "../../../chunks/AdminNavigation.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex"><div class="w-12">${validate_component(AdminNavigation, "AdminNavigation").$$render($$result, {}, {}, {})}</div>

	<div class="main-content flex-grow ml-5 sm:ml-1">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
