

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rank/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.67c75964.js","_app/immutable/chunks/index.638dec40.js"];
export const stylesheets = [];
export const fonts = [];
