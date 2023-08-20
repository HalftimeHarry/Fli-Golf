import { c as create_ssr_component, s as setContext, e as escape, h as compute_rest_props, g as getContext, a as add_attribute, i as spread, j as escape_attribute_value, k as escape_object, b as compute_slots, v as validate_component } from "./index2.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
import "./supabaseClient.js";
const cBase$2 = "grid grid-rows-[auto_1fr_auto] overflow-y-auto";
const cRegionLead = "box-border";
const cRegionDefault = "box-border";
const cRegionTrail = "box-border";
const AppRail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { width = "w-20" } = $$props;
  let { height = "h-full" } = $$props;
  let { gap = "gap-0" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { active = "bg-primary-active-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { aspectRatio = "aspect-square" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("spacing", spacing);
  setContext("aspectRatio", aspectRatio);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classesBase = `${cBase$2} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ""}`;
  classesRegionLead = `${cRegionLead} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
  return `

<div class="${"app-rail " + escape(classesBase, true)}" data-testid="app-rail">
	<div class="${"app-bar-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>
	
	<div class="${"app-bar-default " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
	
	<div class="${"app-bar-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div></div>`;
});
const cBase$1 = "cursor-pointer";
const cWrapper$1 = "flex flex-col justify-center items-stretch";
const cInterface = "text-center";
const cLabel$1 = "font-bold text-xs";
const AppRailTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesInterface;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "regionLead",
    "regionLabel",
    "hover",
    "active",
    "spacing",
    "width",
    "aspectRatio"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { width = getContext("width") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classActive = group === value ? active : "";
  classesBase = `${cBase$1} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper$1} ${aspectRatio} ${width} ${hover} ${classActive}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel$1} ${regionLabel}`;
  return `<label class="${"app-rail-tile " + escape(classesBase, true)}" data-testid="app-rail-tile"${add_attribute("title", title, 0)}>
	
	
	<div class="${"app-rail-wrapper " + escape(classesWrapper, true)}">
		<div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>
		
		<div class="${"app-rail-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			<div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const cBase = "unstyled";
const cWrapper = "w-full flex flex-col justify-center items-stretch text-center space-y-1";
const cLabel = "font-bold text-xs";
const AppRailAnchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, ["selected", "regionLead", "regionLabel", "hover", "active", "spacing", "aspectRatio"]);
  let $$slots = compute_slots(slots);
  let { selected = false } = $$props;
  let { regionLead = "flex justify-center items-center" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  classActive = selected ? active : "";
  classesBase = `${cBase} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper} ${aspectRatio} ${hover} ${spacing} ${classActive}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel} ${regionLabel}`;
  return `<a${spread(
    [
      {
        class: "app-rail-anchor " + escape(classesBase, true)
      },
      {
        href: escape_attribute_value($$props.href)
      },
      escape_object(prunedRestProps()),
      { "data-testid": "app-rail-anchor" }
    ],
    {}
  )}><div class="${"app-rail-wrapper " + escape(classesWrapper, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		<div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></a>`;
});
const AdminNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTile = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


<div class="fixed top-0 left-0 mt-16 w-64"><h1 class="text-white"></h1>

	${validate_component(AppRail, "AppRail").$$render($$result, {}, {}, {
      trail: () => {
        return `
			${validate_component(AppRailAnchor, "AppRailAnchor").$$render($$result, { href: "/", title: "Account" }, {}, {
          default: () => {
            return `<i class="fas fa-sign-out-alt text-white"></i>`;
          }
        })}
		`;
      },
      lead: () => {
        return `${validate_component(AppRailAnchor, "AppRailAnchor").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<i class="fas fa-home"></i>`;
          }
        })}
		`;
      },
      default: () => {
        return `
		${validate_component(AppRailTile, "AppRailTile").$$render(
          $$result,
          {
            name: "groups",
            value: 0,
            title: "Contacts",
            group: currentTile
          },
          {
            group: ($$value) => {
              currentTile = $$value;
              $$settled = false;
            }
          },
          {
            lead: () => {
              return `<i class="fa fa-plus"></i>`;
            },
            default: () => {
              return `<span class="text-white">Contacts</span>`;
            }
          }
        )}
		${validate_component(AppRailTile, "AppRailTile").$$render(
          $$result,
          {
            name: "sponsor",
            value: 1,
            title: "Sponsor",
            group: currentTile
          },
          {
            group: ($$value) => {
              currentTile = $$value;
              $$settled = false;
            }
          },
          {
            lead: () => {
              return `<i class="fa fa-list"></i>`;
            },
            default: () => {
              return `<span class="text-white">Sponsors</span>`;
            }
          }
        )}
		${validate_component(AppRailTile, "AppRailTile").$$render(
          $$result,
          {
            name: "venues",
            value: 2,
            title: "Venues",
            group: currentTile
          },
          {
            group: ($$value) => {
              currentTile = $$value;
              $$settled = false;
            }
          },
          {
            lead: () => {
              return `<i class="fa fa-list"></i>`;
            },
            default: () => {
              return `<span class="text-white">Venues</span>`;
            }
          }
        )}
		${validate_component(AppRailTile, "AppRailTile").$$render(
          $$result,
          {
            name: "pro",
            value: 2,
            title: "Pro-Players",
            group: currentTile
          },
          {
            group: ($$value) => {
              currentTile = $$value;
              $$settled = false;
            }
          },
          {
            lead: () => {
              return `<i class="fa fa-list"></i>`;
            },
            default: () => {
              return `<span class="text-white">Pro-Players</span>`;
            }
          }
        )}
		`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  AdminNavigation as A
};
