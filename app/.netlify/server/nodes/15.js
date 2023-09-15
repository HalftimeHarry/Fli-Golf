

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/schedule/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.31768070.js","_app/immutable/chunks/index.c063a4d7.js"];
export const stylesheets = [];
export const fonts = [];
