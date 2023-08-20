

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rank/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.18407058.js","_app/immutable/chunks/index.1b8d3cdb.js"];
export const stylesheets = [];
export const fonts = [];
