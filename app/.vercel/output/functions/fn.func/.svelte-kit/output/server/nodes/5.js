

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.daa6ff8b.js","_app/immutable/chunks/index.638dec40.js","_app/immutable/chunks/supabaseClient.180e0253.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.7f3c2748.js","_app/immutable/chunks/AuthStore.a54cdaef.js","_app/immutable/chunks/index.273d9960.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.4bfc3f4c.js","_app/immutable/chunks/navigation.48061e34.js","_app/immutable/chunks/singletons.1c15fdb5.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
