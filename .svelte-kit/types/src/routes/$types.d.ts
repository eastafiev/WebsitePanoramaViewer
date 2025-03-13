import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/blog" | "/blog/posts/announcing-files-v2" | "/blog/posts/announcing-files-v2-4-30" | "/blog/posts/announcing-files-v2-4-40" | "/blog/posts/announcing-files-v2-5" | "/blog/posts/announcing-files-v2-5-10" | "/blog/posts/announcing-files-v2-5-20" | "/blog/posts/introducing-files-v2-0-33" | "/blog/posts/introducing-files-v2-1" | "/blog/posts/introducing-files-v2-3" | "/blog/posts/introducing-files-v2-4" | "/blog/posts/introducing-v2-4-preview" | "/blog/posts/listary-integration" | "/blog/posts/now-on-scoop" | "/blog/posts/now-on-winget" | "/blog/posts/preview-on-store" | "/blog/posts/ten-things" | "/blog/posts/v3" | "/blog/posts/v3-1" | "/blog/posts/v3-2" | "/blog/posts/v3-2-2" | "/blog/posts/v3-3" | "/blog/posts/v3-4" | "/blog/posts/v3-4-1" | "/blog/posts/v3-5" | "/blog/posts/v3-6" | "/blog/posts/v3-7" | "/blog/posts/v3-7-11" | "/blog/posts/v3-7-6" | "/blog/posts/v3-7-7" | "/blog/posts/v3-8" | "/blog/posts/v3-8-1" | "/blog/posts/v3-8-11" | "/blog/posts/v3-8-12" | "/blog/posts/v3-8-13" | "/blog/posts/v3-8-14" | "/blog/posts/v3-8-5" | "/blog/posts/v3-9-0" | "/blog/posts/v3-9-1" | "/blog/posts/v3-9-2" | "/docs" | "/docs/configuring/[...rest]" | "/docs/contributing/building-from-source" | "/docs/contributing/code-style" | "/docs/contributing/translating" | "/docs/contributing/updates" | "/docs/customize-settings/actions" | "/docs/customize-settings/advanced" | "/docs/customize-settings/appearance" | "/docs/customize-settings/files-and-folders" | "/docs/customize-settings/layout" | "/docs/customize-settings/[...rest]" | "/docs/features/cloud-drives" | "/docs/features/command-palette" | "/docs/features/folder-config" | "/docs/features/ftp" | "/docs/features/git" | "/docs/features/integrations" | "/docs/features/layout-picker" | "/docs/features/tabs" | "/docs/features/tags" | "/docs/install" | "/download" | "/download/preview" | "/download/stable" | "/privacy" | "/themes" | null
type LayoutParams = RouteParams & { rest?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>>>>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>>>>;