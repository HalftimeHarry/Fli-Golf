import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../chunks/Table.js";
const VenueTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tableSimple = { head: [], body: [], meta: [], foot: [] };
  return `<div class="container mx-auto px-4"><h1 class="text-4xl font-bold mb-4 text-white">Venues</h1>
	${validate_component(Table, "Table").$$render($$result, { source: tableSimple }, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<div class="container mx-auto px-4 mt-16 ml-24">${`<div>${validate_component(VenueTable, "VenueTable").$$render($$result, {}, {}, {})}</div>`}</div>`;
});
export {
  Page as default
};
