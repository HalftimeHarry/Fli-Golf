

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.6520e52b.js","_app/immutable/chunks/index.c063a4d7.js","_app/immutable/chunks/overlayStore.d187522e.js","_app/immutable/chunks/index.22c2a792.js","_app/immutable/chunks/index.03d892fd.js","_app/immutable/chunks/supabaseClient.979aa1ef.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/11.51795245.css"];
export const fonts = [];
