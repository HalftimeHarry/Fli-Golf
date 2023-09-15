import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index2.js";
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventTitle } = $$props;
  let { eventDescription } = $$props;
  if ($$props.eventTitle === void 0 && $$bindings.eventTitle && eventTitle !== void 0)
    $$bindings.eventTitle(eventTitle);
  if ($$props.eventDescription === void 0 && $$bindings.eventDescription && eventDescription !== void 0)
    $$bindings.eventDescription(eventDescription);
  return `<div class="mb-4 p-4 border rounded-lg shadow bg-crimson-500"><h2 class="font-bold text-2xl">${escape(eventTitle)}</h2>
	<p>${escape(eventDescription)}</p></div>`;
});
const BasicCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventTitle } = $$props;
  let { eventDescription } = $$props;
  if ($$props.eventTitle === void 0 && $$bindings.eventTitle && eventTitle !== void 0)
    $$bindings.eventTitle(eventTitle);
  if ($$props.eventDescription === void 0 && $$bindings.eventDescription && eventDescription !== void 0)
    $$bindings.eventDescription(eventDescription);
  return `<div class="p-4 border rounded-lg shadow"><h2 class="font-bold">${escape(eventTitle)}</h2>
	<p>${escape(eventDescription)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-6"><h1 class="text-9xl font-bold mb-4 uppercase">Schedule</h1>

	<div class="flex space-x-4 mb-4"><button class="${"px-4 py-2 " + escape(
    "bg-blue-500 text-white",
    true
  )}">Upcoming
		</button>
		<button class="${"px-4 py-2 " + escape(
    "bg-gray-800",
    true
  )}">Completed
		</button></div>

	${`
		${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      eventTitle: "Feature Event Title",
      eventDescription: "Feature Event Description"
    },
    {},
    {}
  )}

		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${validate_component(BasicCard, "BasicCard").$$render(
    $$result,
    {
      eventTitle: "Upcoming Event 1",
      eventDescription: "Event Description"
    },
    {},
    {}
  )}
			</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${validate_component(BasicCard, "BasicCard").$$render(
    $$result,
    {
      eventTitle: "Upcoming Event 2",
      eventDescription: "Event Description"
    },
    {},
    {}
  )}
			</div>`}</div>`;
});
export {
  Page as default
};
