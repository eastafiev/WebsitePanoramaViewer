// @ts-nocheck
import type { LayoutLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Post } from "../+page.server";

export const load = async ({ route }: Parameters<LayoutLoad>[0]) => {
	const slug = route.id.replace("/blog/posts/", "") ?? null;

	try {
		return {
			slug,
			...((await import(`./${slug}/+page.md`)) as Post).metadata,
		};
	} catch {
		throw error(404, "No such blog post was found!");
	}
};
