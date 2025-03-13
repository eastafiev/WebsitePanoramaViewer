// @ts-nocheck
import { docsPages, docsTree } from "$data/docsTree";
import type { LayoutServerLoad } from "./$types";

export const load = async ({ url, route }: Parameters<LayoutServerLoad>[0]) => {
	return {
		pagePath: url.pathname,
		currentPage: docsPages.find(
			p => p.path === route.id.substring(route.id.indexOf("/", 2))
		) ?? { title: "Overview", path: "" },
		docs: docsTree,
		docsPages: docsPages,
	};
};
