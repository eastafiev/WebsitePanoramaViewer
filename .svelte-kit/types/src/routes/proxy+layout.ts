// @ts-nocheck
import type { LayoutLoad } from "./$types";
import { docsPages, docsTree } from "$data/docsTree";
import { waitLocale } from "svelte-i18n";
import i18n from "$i18n";

export const load = () => {
	i18n();
	waitLocale();

	return {
		docs: docsTree,
		docsPages: docsPages,
	};
};

export const prerender = false;
;null as any as LayoutLoad;