

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.daf443b8.js","_app/immutable/chunks/index.1b8d3cdb.js","_app/immutable/chunks/supabaseClient.336a46e5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.b182b586.js","_app/immutable/chunks/AuthStore.424e05eb.js","_app/immutable/chunks/index.6821f402.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.c6d18dfd.js","_app/immutable/chunks/navigation.689cccdd.js","_app/immutable/chunks/singletons.7fcf92e5.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
