import * as universal from '../entries/pages/blog/posts/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/posts/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/posts/+layout.ts";
export const imports = ["_app/immutable/nodes/2.Cy651fAO.js","_app/immutable/chunks/56.BZwvlIsL.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DCUrRz8L.js","_app/immutable/chunks/index.DLqkoM2M.js","_app/immutable/chunks/internal.nE7rfMg7.js","_app/immutable/chunks/i18n.h-AKgUsv.js","_app/immutable/chunks/entry.BLjIUlTD.js","_app/immutable/chunks/IconButton.BfKThu_b.js","_app/immutable/chunks/TextBlock.DJlM-QSW.js","_app/immutable/chunks/Metadata.BGlqizpj.js","_app/immutable/chunks/utils.B2a0cVJR.js"];
export const stylesheets = ["_app/immutable/assets/2.B2a70reN.css","_app/immutable/assets/NavigationView.DnY0bhLd.css","_app/immutable/assets/i18n.COzR8NHf.css"];
export const fonts = [];
