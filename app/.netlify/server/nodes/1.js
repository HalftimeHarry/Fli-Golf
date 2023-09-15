

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c1a5a6d2.js","_app/immutable/chunks/index.c063a4d7.js","_app/immutable/chunks/stores.69c008c2.js","_app/immutable/chunks/singletons.ac1cbc72.js","_app/immutable/chunks/index.22c2a792.js","_app/immutable/chunks/paths.89209808.js"];
export const stylesheets = [];
export const fonts = [];
