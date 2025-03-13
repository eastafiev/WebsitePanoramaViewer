import * as server from '../entries/pages/docs/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/docs/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/docs/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.BK7zZMaW.js","_app/immutable/chunks/scheduler.DCUrRz8L.js","_app/immutable/chunks/index.DLqkoM2M.js","_app/immutable/chunks/each.LXqkuPC2.js","_app/immutable/chunks/internal.nE7rfMg7.js","_app/immutable/chunks/entry.BLjIUlTD.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/i18n.h-AKgUsv.js","_app/immutable/chunks/links.5U1dMIVO.js","_app/immutable/chunks/TreeView.C7QRoGi6.js","_app/immutable/chunks/TextBlock.DJlM-QSW.js","_app/immutable/chunks/Button.DDbb7uIT.js","_app/immutable/chunks/Metadata.BGlqizpj.js","_app/immutable/chunks/utils.B2a0cVJR.js"];
export const stylesheets = ["_app/immutable/assets/3.CBRezlDm.css","_app/immutable/assets/NavigationView.DnY0bhLd.css","_app/immutable/assets/i18n.COzR8NHf.css"];
export const fonts = [];
