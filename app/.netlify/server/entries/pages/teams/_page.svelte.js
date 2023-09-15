import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/AccordionItem.js";
import "../../../chunks/supabaseClient.js";
const CDNURL = "https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/teams";
const TeamCDNURL = "https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teams = [];
  console.log(teams);
  return `${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      autocollapse: true,
      class: "card p-4 text-token"
    },
    {},
    {
      default: () => {
        return `${each(teams, (team) => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
            content: () => {
              return `<div slot="content" class="flex items-center space-x-4">${team.team_image_url ? `<img${add_attribute("src", `${TeamCDNURL}/${team.team_image_url}`, 0)}${add_attribute("alt", `${team.team_name}`, 0)} class="w-24 h-auto">` : ``}
				${team.team_id && team.team_id.team_image_url ? `<img${add_attribute("src", `${CDNURL}/${team.team_id.team_image_url}`, 0)}${add_attribute("alt", `${team.team_name} Team`, 0)} class="w-24 h-auto">` : ``}
			</div>`;
            },
            summary: () => {
              return `<div slot="summary"><p class="font-bold">${escape(team.team_name)}</p>
			</div>`;
            },
            lead: () => {
              return `<div slot="lead">
			</div>`;
            }
          })}`;
        })}`;
      }
    }
  )}`;
});
export {
  Page as default
};
