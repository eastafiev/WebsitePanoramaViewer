import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import adapter from "@sveltejs/adapter-static"; // Changed from adapter-cloudflare
import { mdsvex } from "mdsvex";
import rehypeColorPreview from "rehype-color-preview";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".md"],
	kit: {
		alias: {
			$data: "src/data",
			$layout: "src/layout",
			$i18n: "src/i18n",
		},

		adapter: adapter({
			// default options are shown
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false,
			strict: true,
		}),
		paths: {
			// Update this to match your GitHub repository name
			base: process.env.NODE_ENV === "" ? "/WebsitePanoramaViewer" : "",
		},
	},
	preprocess: [
		mdsvex({
			extensions: [".md"],

			smartypants: {
				dashes: "oldschool",
			},

			remarkPlugins: [remarkA11yEmoji, remarkGfm, remarkGithub],
			rehypePlugins: [rehypeColorPreview, rehypeSlug],
		}),
		sveltePreprocess(),
	],
};

// shut up webstorm
// noinspection JSUnusedGlobalSymbols
export default config;
