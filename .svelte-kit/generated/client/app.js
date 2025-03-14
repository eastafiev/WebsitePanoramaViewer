export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44'),
	() => import('./nodes/45'),
	() => import('./nodes/46'),
	() => import('./nodes/47'),
	() => import('./nodes/48'),
	() => import('./nodes/49'),
	() => import('./nodes/50'),
	() => import('./nodes/51'),
	() => import('./nodes/52'),
	() => import('./nodes/53'),
	() => import('./nodes/54'),
	() => import('./nodes/55'),
	() => import('./nodes/56'),
	() => import('./nodes/57'),
	() => import('./nodes/58'),
	() => import('./nodes/59'),
	() => import('./nodes/60'),
	() => import('./nodes/61'),
	() => import('./nodes/62'),
	() => import('./nodes/63'),
	() => import('./nodes/64'),
	() => import('./nodes/65'),
	() => import('./nodes/66'),
	() => import('./nodes/67'),
	() => import('./nodes/68'),
	() => import('./nodes/69'),
	() => import('./nodes/70'),
	() => import('./nodes/71')
];

export const server_loads = [3];

export const dictionary = {
		"/": [4],
		"/blog": [~5],
		"/blog/posts/announcing-files-v2-4-30": [7,[2]],
		"/blog/posts/announcing-files-v2-4-40": [8,[2]],
		"/blog/posts/announcing-files-v2-5-10": [10,[2]],
		"/blog/posts/announcing-files-v2-5-20": [11,[2]],
		"/blog/posts/announcing-files-v2-5": [9,[2]],
		"/blog/posts/announcing-files-v2": [6,[2]],
		"/blog/posts/introducing-files-v2-0-33": [12,[2]],
		"/blog/posts/introducing-files-v2-1": [13,[2]],
		"/blog/posts/introducing-files-v2-3": [14,[2]],
		"/blog/posts/introducing-files-v2-4": [15,[2]],
		"/blog/posts/introducing-v2-4-preview": [16,[2]],
		"/blog/posts/listary-integration": [17,[2]],
		"/blog/posts/now-on-scoop": [18,[2]],
		"/blog/posts/now-on-winget": [19,[2]],
		"/blog/posts/preview-on-store": [20,[2]],
		"/blog/posts/ten-things": [21,[2]],
		"/blog/posts/v3-1": [23,[2]],
		"/blog/posts/v3-2-2": [25,[2]],
		"/blog/posts/v3-2": [24,[2]],
		"/blog/posts/v3-3": [26,[2]],
		"/blog/posts/v3-4-1": [28,[2]],
		"/blog/posts/v3-4": [27,[2]],
		"/blog/posts/v3-5": [29,[2]],
		"/blog/posts/v3-6": [30,[2]],
		"/blog/posts/v3-7-11": [32,[2]],
		"/blog/posts/v3-7-6": [33,[2]],
		"/blog/posts/v3-7-7": [34,[2]],
		"/blog/posts/v3-7": [31,[2]],
		"/blog/posts/v3-8-11": [37,[2]],
		"/blog/posts/v3-8-12": [38,[2]],
		"/blog/posts/v3-8-13": [39,[2]],
		"/blog/posts/v3-8-14": [40,[2]],
		"/blog/posts/v3-8-1": [36,[2]],
		"/blog/posts/v3-8-5": [41,[2]],
		"/blog/posts/v3-8": [35,[2]],
		"/blog/posts/v3-9-0": [42,[2]],
		"/blog/posts/v3-9-1": [43,[2]],
		"/blog/posts/v3-9-2": [44,[2]],
		"/blog/posts/v3": [22,[2]],
		"/docs": [45,[3]],
		"/docs/configuring/[...rest]": [~46,[3]],
		"/docs/contributing/building-from-source": [47,[3]],
		"/docs/contributing/code-style": [48,[3]],
		"/docs/contributing/translating": [49,[3]],
		"/docs/contributing/updates": [50,[3]],
		"/docs/customize-settings/actions": [51,[3]],
		"/docs/customize-settings/advanced": [52,[3]],
		"/docs/customize-settings/appearance": [53,[3]],
		"/docs/customize-settings/files-and-folders": [54,[3]],
		"/docs/customize-settings/layout": [55,[3]],
		"/docs/customize-settings/[...rest]": [~56,[3]],
		"/docs/features/cloud-drives": [57,[3]],
		"/docs/features/command-palette": [58,[3]],
		"/docs/features/folder-config": [59,[3]],
		"/docs/features/ftp": [60,[3]],
		"/docs/features/git": [61,[3]],
		"/docs/features/integrations": [62,[3]],
		"/docs/features/layout-picker": [63,[3]],
		"/docs/features/tabs": [64,[3]],
		"/docs/features/tags": [65,[3]],
		"/docs/install": [66,[3]],
		"/download": [67],
		"/download/preview": [68],
		"/download/stable": [69],
		"/privacy": [70],
		"/themes": [71]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';