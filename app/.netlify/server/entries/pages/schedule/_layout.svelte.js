import { c as create_ssr_component } from "../../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto p-4 bg-crimson-500">
	<div class="flex-grow">${slots.default ? slots.default({}) : ``}
		</div></div>`;
});
export {
  Layout as default
};
