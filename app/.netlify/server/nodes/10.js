

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.237a99d4.js","_app/immutable/chunks/index.c063a4d7.js","_app/immutable/chunks/supabaseClient.979aa1ef.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.03d892fd.js","_app/immutable/chunks/AuthStore.fb1da673.js","_app/immutable/chunks/index.22c2a792.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.6f1b071b.js","_app/immutable/chunks/navigation.cc3e87f2.js","_app/immutable/chunks/singletons.ac1cbc72.js","_app/immutable/chunks/paths.89209808.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
