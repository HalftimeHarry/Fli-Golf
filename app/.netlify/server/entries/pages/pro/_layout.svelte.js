import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { A as AdminNavigation } from "../../../chunks/AdminNavigation.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex">${validate_component(AdminNavigation, "AdminNavigation").$$render($$result, {}, {}, {})}

	<div class="content">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
