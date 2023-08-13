import { c as create_ssr_component, k as createEventDispatcher, e as escape, l as each, a as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesTable;
  createEventDispatcher();
  let { source } = $$props;
  let { interactive = false } = $$props;
  let { element = "table" } = $$props;
  let { text = "" } = $$props;
  let { color = "" } = $$props;
  let { regionHead = "" } = $$props;
  let { regionHeadCell = "" } = $$props;
  let { regionBody = "" } = $$props;
  let { regionCell = "" } = $$props;
  let { regionFoot = "" } = $$props;
  let { regionFootCell = "" } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.regionHead === void 0 && $$bindings.regionHead && regionHead !== void 0)
    $$bindings.regionHead(regionHead);
  if ($$props.regionHeadCell === void 0 && $$bindings.regionHeadCell && regionHeadCell !== void 0)
    $$bindings.regionHeadCell(regionHeadCell);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionCell === void 0 && $$bindings.regionCell && regionCell !== void 0)
    $$bindings.regionCell(regionCell);
  if ($$props.regionFoot === void 0 && $$bindings.regionFoot && regionFoot !== void 0)
    $$bindings.regionFoot(regionFoot);
  if ($$props.regionFootCell === void 0 && $$bindings.regionFootCell && regionFootCell !== void 0)
    $$bindings.regionFootCell(regionFootCell);
  classesBase = `${$$props.class || ""}`;
  classesTable = `${element} ${text} ${color}`;
  return `<div class="${"table-container " + escape(classesBase, true)}">
	
	<table class="${[escape(classesTable, true), interactive ? "table-interactive" : ""].join(" ").trim()}" role="grid">
		
		<thead class="${"table-head " + escape(regionHead, true)}"><tr>${each(source.head, (heading) => {
    return `<th${add_attribute("class", regionHeadCell, 0)}><!-- HTML_TAG_START -->${heading}<!-- HTML_TAG_END --></th>`;
  })}</tr></thead>
		
		<tbody class="${"table-body " + escape(regionBody, true)}">${each(source.body, (row, rowIndex) => {
    return `
				
				<tr${add_attribute("aria-rowindex", rowIndex + 1, 0)}>${each(row, (cell, cellIndex) => {
      return `
						
						<td${add_attribute("class", regionCell, 0)} role="gridcell"${add_attribute("aria-colindex", cellIndex + 1, 0)}${add_attribute("tabindex", cellIndex === 0 ? 0 : -1, 0)}><!-- HTML_TAG_START -->${cell ? cell : "-"}<!-- HTML_TAG_END -->
						</td>`;
    })}
				</tr>`;
  })}</tbody>
		
		${source.foot ? `<tfoot class="${"table-foot " + escape(regionFoot, true)}"><tr>${each(source.foot, (cell) => {
    return `<td${add_attribute("class", regionFootCell, 0)}><!-- HTML_TAG_START -->${cell}<!-- HTML_TAG_END --></td>`;
  })}</tr></tfoot>` : ``}</table></div>`;
});
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
