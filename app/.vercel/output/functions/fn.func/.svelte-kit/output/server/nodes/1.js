

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2b7e0c62.js","_app/immutable/chunks/index.638dec40.js","_app/immutable/chunks/singletons.1c15fdb5.js","_app/immutable/chunks/index.273d9960.js"];
export const stylesheets = [];
export const fonts = [];
