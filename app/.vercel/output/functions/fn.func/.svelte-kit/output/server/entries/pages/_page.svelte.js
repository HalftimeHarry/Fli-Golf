import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/supabaseClient.js";
import { a as authStore } from "../../chunks/AuthStore.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let formType = "";
  authStore.subscribe((state) => {
    formType = state.formType;
  });
  return `${formType === "register" ? `
	<div>
		<div class="flex justify-center items-center flex-col"><div class="col-6 form-widget" aria-live="polite"><h1 class="header"><p class="description">Register with your email and password below</p>
					<form class="form-widget"><div><label for="email">Email</label>
							<input id="email" class="inputField text-black" type="email" placeholder="Your email"${add_attribute("value", email, 0)}></div>
						<div><label for="password">Password</label>
							<input id="password" class="inputField text-black" type="password" placeholder="Your password"${add_attribute("value", password, 0)}></div>
						<div><button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" aria-live="polite" ${""}><span>${escape("Register")}</span></button></div></form></h1></div></div></div>` : ``}

${formType === "login" ? `<div><div class="flex justify-center items-center flex-col"><div class="col-6 form-widget" aria-live="polite"><p class="description">Sign in with your email and password below</p>
				<form class="form-widget"><div><label for="email">Email</label>
						<input id="email" class="inputField text-black" type="email" placeholder="Your email"${add_attribute("value", email, 0)}></div>
					<div><label for="password">Password</label>
						<input id="password" class="inputField text-black" type="password" placeholder="Your password"${add_attribute("value", password, 0)}></div>
					<div><button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" aria-live="polite" ${""}><span>${escape("Login")}</span></button></div></form></div></div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
