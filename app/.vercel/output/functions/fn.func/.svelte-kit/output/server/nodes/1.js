

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a9f94c3b.js","_app/immutable/chunks/index.1b8d3cdb.js","_app/immutable/chunks/singletons.64f5b04f.js","_app/immutable/chunks/index.6821f402.js"];
export const stylesheets = [];
export const fonts = [];
