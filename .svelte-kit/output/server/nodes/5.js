import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D6NOwlqk.js","_app/immutable/chunks/scheduler.DCUrRz8L.js","_app/immutable/chunks/index.DLqkoM2M.js","_app/immutable/chunks/PageSection.Xm7z1GkG.js","_app/immutable/chunks/internal.nE7rfMg7.js","_app/immutable/chunks/i18n.h-AKgUsv.js","_app/immutable/chunks/entry.BLjIUlTD.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/each.LXqkuPC2.js","_app/immutable/chunks/Button.DDbb7uIT.js","_app/immutable/chunks/HeaderChip.CMHBqRUn.js","_app/immutable/chunks/utils.B2a0cVJR.js","_app/immutable/chunks/Metadata.BGlqizpj.js"];
export const stylesheets = ["_app/immutable/assets/5.DeBLhDnx.css","_app/immutable/assets/NavigationView.DnY0bhLd.css","_app/immutable/assets/i18n.COzR8NHf.css"];
export const fonts = [];
