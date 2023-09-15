import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/AccordionItem.js";
import "../../../chunks/supabaseClient.js";
const CDNURL = "https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/professionals";
const TeamCDNURL = "https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let professionals = [];
  console.log(professionals);
  return `${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      autocollapse: true,
      class: "card p-4 text-token"
    },
    {},
    {
      default: () => {
        return `${each(professionals, (pro) => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
            content: () => {
              return `<div slot="content" class="flex items-center space-x-4">${pro.pro_image_url ? `<img${add_attribute("src", `${CDNURL}/${pro.pro_image_url}`, 0)}${add_attribute("alt", `${pro.full_name}`, 0)} class="w-24 h-auto">` : ``}
				${pro.team_id && pro.team_id.team_image_url ? `<img${add_attribute("src", `${TeamCDNURL}/${pro.team_id.team_image_url}`, 0)}${add_attribute("alt", `${pro.full_name} Team`, 0)} class="w-24 h-auto">` : ``}
			</div>`;
            },
            summary: () => {
              return `<div slot="summary"><p class="font-bold">${escape(pro.full_name)}</p>
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
