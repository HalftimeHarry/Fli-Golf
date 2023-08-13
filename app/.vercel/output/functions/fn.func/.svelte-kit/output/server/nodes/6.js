

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.e30baa13.js","_app/immutable/chunks/index.638dec40.js","_app/immutable/chunks/index.273d9960.js","_app/immutable/chunks/index.7f3c2748.js","_app/immutable/chunks/supabaseClient.180e0253.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/6.51795245.css"];
export const fonts = [];
