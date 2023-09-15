import { c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, d as each, f as subscribe, g as createEventDispatcher, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { a as authStore } from "../../chunks/AuthStore.js";
import "../../chunks/supabaseClient.js";
import { o as overlayStore } from "../../chunks/overlayStore.js";
import { p as page } from "../../chunks/stores.js";
const themeCrimson = "";
const skeleton = "";
const app = "";
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	<div class="${"app-bar-row-main " + escape(classesRowMain, true)}">
		${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
		
		${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>
	
	${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell">
	${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}

	
	<div class="${"flex-auto " + escape(cContentArea, true)}">
		${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}

		
		<div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}">
			${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}

			
			<main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>

			
			${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>

		
		${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>

	
	${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let elemCarousel;
  const unsplashIds = [
    "b2H6cWfg4Ps",
    "ISC2XxlWXkw",
    "B0jdi7HNig8",
    "y85vZTvzd2g",
    "8uYH5HGzVr8",
    "c98GB-1OcKA"
  ];
  return `<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<button type="button" class="btn-icon variant-filled"><i class="fas fa-arrow-left"></i></button>
	
	<div class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"${add_attribute("this", elemCarousel, 0)}>${each(unsplashIds, (unsplashId) => {
    return `<img class="snap-center w-[1024px] rounded-container-token" src="${"https://source.unsplash.com/" + escape(unsplashId, true) + "/1024x768"}"${add_attribute("alt", unsplashId, 0)} loading="lazy">`;
  })}</div>
	
	<button type="button" class="btn-icon variant-filled"><i class="fas fa-arrow-right"></i></button></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="rounded-lg shadow bg-crimson-500 m-4"><div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><a href="https://fligolf.com/" class="flex items-center mb-4 sm:mb-0"><img src="/FLI_BLK.png" alt="FLI GOLF Logo" class="logo-class"></a>
			<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="#" class="mr-4 hover:underline md:mr-6">About</a></li>
				<li><a href="#" class="mr-4 hover:underline md:mr-6">Media &amp; Press</a></li>
				<li><a href="#" class="mr-4 hover:underline md:mr-6">Format</a></li>
				<li><a href="#" class="hover:underline">Contact us</a></li></ul></div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
		<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://fligolf.com/" class="hover:underline">Fli Golf™</a>. All Rights
			Reserved.</span></div></footer>`;
});
const VegasPopUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $overlayStore, $$unsubscribe_overlayStore;
  $$unsubscribe_overlayStore = subscribe(overlayStore, (value) => $overlayStore = value);
  createEventDispatcher();
  $$unsubscribe_overlayStore();
  return `${$overlayStore ? `<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"><div class="relative bg-white p-4 rounded-lg max-w-xl w-full">
			<button class="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900" type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>

			
			<div class="text-black">Vegas Info Here</div></div></div>` : ``}`;
});
const NavScrol = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $overlayStore, $$unsubscribe_overlayStore;
  $$unsubscribe_overlayStore = subscribe(overlayStore, (value) => $overlayStore = value);
  $$unsubscribe_overlayStore();
  return `<div class="container mx-auto p-4 border-t border-white z-10"><div class="top-row flex flex-row space-x-4 mb-8 justify-between"><a href="schedule" class="hover:underline">Schedule</a>
		<a href="players" class="hover:underline">Players</a>
		<a href="teams" class="hover:underline">Teams</a>
		<a href="sponsors" class="hover:underline">Sponsors</a>
		<a href="venues" class="hover:underline">Venues</a>
		<a href="#" class="hover:underline">Standings</a>
		<a href="#" class="hover:underline">Fantasy</a>
		<a href="#" class="hover:underline">Statistics</a>
		<a href="#" class="hover:underline">Leaderboard</a>
		<a href="#" class="hover:underline">Where to Watch</a>
		<a href="info" class="hover:underline">Info</a>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Vegas
		</button>
		${$overlayStore === "vegas" ? `${validate_component(VegasPopUp, "VegasPopUp").$$render($$result, {}, {}, {})}` : ``}</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let url;
  authStore.subscribe((state) => {
    state.isLoggedIn;
    state.formType;
  });
  ({ url } = $page);
  {
    console.log(url);
  }
  $$unsubscribe_page();
  return `${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    header: () => {
      return `${validate_component(AppBar, "AppBar").$$render($$result, { class: "bg-white" }, {}, {
        trail: () => {
          return `${`<button class="btn btn-lg variant-ghost-surface">Register
					</button>
					<button class="btn btn-lg variant-ghost-surface">Sign In
					</button>`}
			`;
        },
        lead: () => {
          return `<a href="/"><img src="/FLI_BLK.png" alt="FLI GOLF Logo" class="logo-class"></a>`;
        }
      })}
		${validate_component(NavScrol, "NavScrol").$$render($$result, {}, {}, {})}
	`;
    },
    default: () => {
      return `${`${url.pathname === "/" ? `${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}` : ``}`}
	${slots.default ? slots.default({}) : ``}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Layout as default
};
