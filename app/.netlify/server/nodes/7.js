

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sponsors/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.1201524b.js","_app/immutable/chunks/index.c063a4d7.js","_app/immutable/chunks/paths.89209808.js"];
export const stylesheets = [];
export const fonts = [];
