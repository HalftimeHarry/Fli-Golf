

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e099be91.js","_app/immutable/chunks/index.1b8d3cdb.js","_app/immutable/chunks/AdminNavigation.637e51ff.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.c6d18dfd.js","_app/immutable/chunks/index.6821f402.js","_app/immutable/chunks/navigation.689cccdd.js","_app/immutable/chunks/singletons.7fcf92e5.js","_app/immutable/chunks/supabaseClient.336a46e5.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
