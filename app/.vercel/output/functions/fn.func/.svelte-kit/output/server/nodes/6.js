

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.a202a61b.js","_app/immutable/chunks/index.1b8d3cdb.js","_app/immutable/chunks/index.6821f402.js","_app/immutable/chunks/index.b182b586.js","_app/immutable/chunks/supabaseClient.336a46e5.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/6.51795245.css"];
export const fonts = [];
