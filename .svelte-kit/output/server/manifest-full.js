export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["appinstallers/Files.preview.appinstaller","appinstallers/Files.stable.appinstaller","blog-resources/files2-4-30/HeroImage.jpg","blog-resources/files2-4-30/QuickAccess.png","blog-resources/files2-4-30/Tags.png","blog-resources/files2-4-40/EditContextMenu.png","blog-resources/files2-4-40/EditTags.png","blog-resources/files2-4-40/HeroImage.jpg","blog-resources/files2-4-40/TagsMenu.png","blog-resources/files2-5/Acrylic.png","blog-resources/files2-5/GitFeatures.png","blog-resources/files2-5/HeroImage.jpg","blog-resources/files2-5/SwipeGestures.gif","blog-resources/files2-5-10/DetailsPane.png","blog-resources/files2-5-10/GitColumns.png","blog-resources/files2-5-10/HeroImage.jpg","blog-resources/files2-5-10/OpenVSCode.png","blog-resources/files2-5-20/EditTags.png","blog-resources/files2-5-20/GitPush.png","blog-resources/files2-5-20/HeroImage.jpg","blog-resources/files2-5-20/SplashScreen.png","blog-resources/files2-5-20/ToolbarIcon.png","blog-resources/filesv2/Files21_V2_ColumnView_Light_RGB.jpg","blog-resources/filesv2/Files21_V2_ContextMenu_Light_RGB.jpg","blog-resources/filesv2/Files21_V2_Themes_Dark_RGB.jpg","blog-resources/filesv2/FilesV2Banner.jpg","blog-resources/filesv2-1/HeroImage.jpg","blog-resources/filesv2-1/PropertiesDialog.jpg","blog-resources/filesv2-3/BulkActions.png","blog-resources/filesv2-3/CompactSpacing.png","blog-resources/filesv2-3/HeroImage.jpg","blog-resources/filesv2-3/Tabs.png","blog-resources/filesv2-3/Tags.png","blog-resources/filesv2-4/CreateArchive.png","blog-resources/filesv2-4/ExtractArchive.png","blog-resources/filesv2-4/MicaAlt.png","blog-resources/filesv2-4/RoundCorners.png","blog-resources/filesv2-4/StorageInformation.png","blog-resources/introducing-v2-4-preview/HeroImage.jpg","blog-resources/listary-integration/Hero.png","blog-resources/listary-integration/Listary.png","blog-resources/listary-integration/ListaryMenu.png","blog-resources/listary-integration/ListaryQuickSwitch.png","blog-resources/now-on-scoop/Hero.png","blog-resources/now-on-winget/Hero.png","blog-resources/preview/Hero.png","blog-resources/preview-on-store/Hero.png","blog-resources/ten-things/HeroImage.jpg","blog-resources/v3/CommandPalette.jpg","blog-resources/v3/Hero.jpg","blog-resources/v3/NewIcon.jpg","blog-resources/v3/OfficePreview.jpg","blog-resources/v3/PreviewPane.jpg","blog-resources/v3/Sidebar.jpg","blog-resources/v3/StatusCenter.jpg","blog-resources/v3-1/Hero.png","blog-resources/v3-1/OpenInNewTab.png","blog-resources/v3-1/SmartExtract.png","blog-resources/v3-1/SortFilesFirst.png","blog-resources/v3-1/SystemTray.png","blog-resources/v3-2/AlbumCovers.png","blog-resources/v3-2/Hero.png","blog-resources/v3-2/ListView.png","blog-resources/v3-2/ThumbnailsOne.png","blog-resources/v3-2/ThumbnailsTwo.png","blog-resources/v3-2-2/Hero.png","blog-resources/v3-3/Hero.png","blog-resources/v3-3/LayoutPicker.png","blog-resources/v3-3/LayoutSettings.png","blog-resources/v3-3/SidebarIcons.png","blog-resources/v3-4/Actions.png","blog-resources/v3-4/BackgroundImage.png","blog-resources/v3-4/BackgroundImageContextMenu.png","blog-resources/v3-4/Filter.png","blog-resources/v3-4/Hero.png","blog-resources/v3-4/Listary.png","blog-resources/v3-4/ListaryMenu.png","blog-resources/v3-4/ListaryQuickSwitch.png","blog-resources/v3-4-1/Hero.png","blog-resources/v3-5/EditInNotepad.png","blog-resources/v3-5/Hero.png","blog-resources/v3-5/ImageSizeTooltip.png","blog-resources/v3-5/NetworkLocations.png","blog-resources/v3-5/UpdatedDesign.png","blog-resources/v3-5/UpdatedDualPaneDesign.png","blog-resources/v3-6/BackgroundImage.png","blog-resources/v3-6/Hero.png","blog-resources/v3-6/TabActions.png","blog-resources/v3-6/VerticalArrangedPane.png","blog-resources/v3-7/BreadcrumbFlyout.png","blog-resources/v3-7/CpuThreads.png","blog-resources/v3-7/Hero.png","blog-resources/v3-7/HomeButton.png","blog-resources/v3-7/NavigationHistory.png","blog-resources/v3-8/ArchiveSettings.png","blog-resources/v3-8/DataStreams.png","blog-resources/v3-8/Hero.png","blog-resources/v3-8/StorageSense.png","blog-resources/v3-8-1/CompressAttribute.png","blog-resources/v3-8-1/DriveDetails.png","blog-resources/v3-8-1/Hero.png","blog-resources/v3-8-1/ShortcutDialog.png","blog-resources/v3-8-12/ReleaseNotesIcon.png","blog-resources/v3-8-12/ShortcutWindowArgs.png","blog-resources/v3-8-12/UpdateFilesIcon.png","blog-resources/v3-8-13/CardsViewMedium.png","blog-resources/v3-8-13/CardsViewSmall.png","blog-resources/v3-8-13/DetailsViewIconSizes.png","blog-resources/v3-8-14/GridViewContrast.png","blog-resources/v3-8-5/AlwaysSwitchTabs.png","blog-resources/v3-8-5/Hero.png","blog-resources/v3-9/AlwaysSwitchTabs.png","blog-resources/v3-9/CardsViewMedium.png","blog-resources/v3-9/CardsViewSmall.png","blog-resources/v3-9/CompressAttribute.png","blog-resources/v3-9/DetailsViewIconSizes.png","blog-resources/v3-9/DriveDetails.png","blog-resources/v3-9/GridViewContrast.png","blog-resources/v3-9/Hero.png","blog-resources/v3-9/ReleaseNotesIcon.png","blog-resources/v3-9/ShortcutDialog.png","blog-resources/v3-9/ShortcutWindowArgs.png","blog-resources/v3-9/UpdateFilesIcon.png","blog-resources/v3-9-1/Hero.png","blog-resources/v4/IDESettings.png","branding/banner-blog.png","branding/banner-docs.png","branding/banner-download.png","branding/banner-themes.png","branding/banner.png","branding/logo-dark.svg","branding/logo-light.svg","branding/logo-mono.svg","branding/logo-themes-dark.svg","branding/logo-themes-light.svg","branding/logo-themes-mono.svg","docs-resources/Background-Image.png","docs-resources/Command-Palette.png","docs-resources/Crowdin-AvailablePluralTypesTip.png","docs-resources/Crowdin-EditorCommandButtons.png","docs-resources/Crowdin-PreviewGenTip.png","docs-resources/Dark-Light-Mode.png","docs-resources/Folder-Background-Image.png","docs-resources/HeroImage.jpg","docs-resources/Listary.png","docs-resources/ListaryMenu.png","docs-resources/ListaryQuickSwitch.png","docs-resources/Settings-Actions-Add.png","docs-resources/Settings-Actions-Edit.png","docs-resources/Settings-Actions.png","docs-resources/Settings-Appearance-Background-Image.png","docs-resources/Settings-Appearance.png","docs-resources/Settings-Dialog-Advanced.png","docs-resources/vs-architecture-config.png","download-sources/msstore_dark.svg","download-sources/msstore_light.svg","download-sources/preview_dark.svg","download-sources/preview_light.svg","fonts/Inter-italic.var.woff2","fonts/Inter-roman.var.woff2","fonts/OpenSans-italic.var.woff2","fonts/OpenSans-roman.var.woff2","preview-samples/index.html","preview-samples/waves.jpg","screenshots/folder-list-dark.png","screenshots/folder-list-light.png","screenshots/win11-dark.jpg","screenshots/win11-light.jpg","ui/exported/calendar-dark.svg","ui/exported/calendar-light.svg","ui/exported/calendar-theme-2.svg","ui/exported/calendar-theme-3.svg","ui/exported/calendar-theme-4.svg","ui/exported/calendar-theme-5.svg","ui/exported/calendar-theme-6.svg","ui/exported/drive-dark.svg","ui/exported/drive-light.svg","ui/exported/drive-theme-2.svg","ui/exported/drive-theme-3.svg","ui/exported/drive-theme-4.svg","ui/exported/drive-theme-5.svg","ui/exported/drive-theme-6.svg","ui/exported/layout-dark.svg","ui/exported/layout-light.svg","ui/exported/layout-theme-2.svg","ui/exported/layout-theme-3.svg","ui/exported/layout-theme-4.svg","ui/exported/layout-theme-5.svg","ui/exported/layout-theme-6.svg","ui/exported/properties-dark.svg","ui/exported/properties-light.svg","ui/exported/properties-theme-2.svg","ui/exported/properties-theme-3.svg","ui/exported/properties-theme-4.svg","ui/exported/properties-theme-5.svg","ui/exported/properties-theme-6.svg","ui/exported/tabs-dark.svg","ui/exported/tabs-light.svg","ui/exported/tabs-theme-2.svg","ui/exported/tabs-theme-3.svg","ui/exported/tabs-theme-4.svg","ui/exported/tabs-theme-5.svg","ui/exported/tabs-theme-6.svg","ui/hero-mask.png","ui/icons/98-error.png","ui/icons/cpp.svg","ui/icons/desktop.png","ui/icons/documents.png","ui/icons/exe.png","ui/icons/file.png","ui/icons/folder.png","ui/icons/music.png","ui/icons/picture.png","ui/icons/pictures.png","ui/icons/video.png","ui/icons/zip.png"]),
	mimeTypes: {".appinstaller":"application/appinstaller",".jpg":"image/jpeg",".png":"image/png",".gif":"image/gif",".svg":"image/svg+xml",".woff2":"font/woff2",".html":"text/html"},
	_: {
		client: {"start":"_app/immutable/entry/start.CimPb9t8.js","app":"_app/immutable/entry/app.sDo2os5j.js","imports":["_app/immutable/entry/start.CimPb9t8.js","_app/immutable/chunks/entry.BLjIUlTD.js","_app/immutable/chunks/scheduler.DCUrRz8L.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.sDo2os5j.js","_app/immutable/chunks/56.BZwvlIsL.js","_app/immutable/chunks/scheduler.DCUrRz8L.js","_app/immutable/chunks/index.DLqkoM2M.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js')),
			__memo(() => import('./nodes/52.js')),
			__memo(() => import('./nodes/53.js')),
			__memo(() => import('./nodes/54.js')),
			__memo(() => import('./nodes/55.js')),
			__memo(() => import('./nodes/56.js')),
			__memo(() => import('./nodes/57.js')),
			__memo(() => import('./nodes/58.js')),
			__memo(() => import('./nodes/59.js')),
			__memo(() => import('./nodes/60.js')),
			__memo(() => import('./nodes/61.js')),
			__memo(() => import('./nodes/62.js')),
			__memo(() => import('./nodes/63.js')),
			__memo(() => import('./nodes/64.js')),
			__memo(() => import('./nodes/65.js')),
			__memo(() => import('./nodes/66.js')),
			__memo(() => import('./nodes/67.js')),
			__memo(() => import('./nodes/68.js')),
			__memo(() => import('./nodes/69.js')),
			__memo(() => import('./nodes/70.js')),
			__memo(() => import('./nodes/71.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/feed.rss",
				pattern: /^\/blog\/feed\.rss\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/blog/feed.rss/_server.ts.js'))
			},
			{
				id: "/blog/posts/announcing-files-v2-4-30",
				pattern: /^\/blog\/posts\/announcing-files-v2-4-30\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/posts/announcing-files-v2-4-40",
				pattern: /^\/blog\/posts\/announcing-files-v2-4-40\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/posts/announcing-files-v2-5-10",
				pattern: /^\/blog\/posts\/announcing-files-v2-5-10\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/posts/announcing-files-v2-5-20",
				pattern: /^\/blog\/posts\/announcing-files-v2-5-20\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/blog/posts/announcing-files-v2-5",
				pattern: /^\/blog\/posts\/announcing-files-v2-5\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/posts/announcing-files-v2",
				pattern: /^\/blog\/posts\/announcing-files-v2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/posts/introducing-files-v2-0-33",
				pattern: /^\/blog\/posts\/introducing-files-v2-0-33\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/blog/posts/introducing-files-v2-1",
				pattern: /^\/blog\/posts\/introducing-files-v2-1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/blog/posts/introducing-files-v2-3",
				pattern: /^\/blog\/posts\/introducing-files-v2-3\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/blog/posts/introducing-files-v2-4",
				pattern: /^\/blog\/posts\/introducing-files-v2-4\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/blog/posts/introducing-v2-4-preview",
				pattern: /^\/blog\/posts\/introducing-v2-4-preview\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/blog/posts/listary-integration",
				pattern: /^\/blog\/posts\/listary-integration\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/blog/posts/now-on-scoop",
				pattern: /^\/blog\/posts\/now-on-scoop\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/blog/posts/now-on-winget",
				pattern: /^\/blog\/posts\/now-on-winget\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/blog/posts/preview-on-store",
				pattern: /^\/blog\/posts\/preview-on-store\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/blog/posts/ten-things",
				pattern: /^\/blog\/posts\/ten-things\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-1",
				pattern: /^\/blog\/posts\/v3-1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-2-2",
				pattern: /^\/blog\/posts\/v3-2-2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-2",
				pattern: /^\/blog\/posts\/v3-2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-3",
				pattern: /^\/blog\/posts\/v3-3\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-4-1",
				pattern: /^\/blog\/posts\/v3-4-1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-4",
				pattern: /^\/blog\/posts\/v3-4\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-5",
				pattern: /^\/blog\/posts\/v3-5\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-6",
				pattern: /^\/blog\/posts\/v3-6\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-7-11",
				pattern: /^\/blog\/posts\/v3-7-11\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-7-6",
				pattern: /^\/blog\/posts\/v3-7-6\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-7-7",
				pattern: /^\/blog\/posts\/v3-7-7\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-7",
				pattern: /^\/blog\/posts\/v3-7\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8-11",
				pattern: /^\/blog\/posts\/v3-8-11\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8-12",
				pattern: /^\/blog\/posts\/v3-8-12\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8-13",
				pattern: /^\/blog\/posts\/v3-8-13\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8-14",
				pattern: /^\/blog\/posts\/v3-8-14\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8-1",
				pattern: /^\/blog\/posts\/v3-8-1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8-5",
				pattern: /^\/blog\/posts\/v3-8-5\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-8",
				pattern: /^\/blog\/posts\/v3-8\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-9-0",
				pattern: /^\/blog\/posts\/v3-9-0\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-9-1",
				pattern: /^\/blog\/posts\/v3-9-1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3-9-2",
				pattern: /^\/blog\/posts\/v3-9-2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/blog/posts/v3",
				pattern: /^\/blog\/posts\/v3\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/docs/configuring/[...rest]",
				pattern: /^\/docs\/configuring(?:\/(.*))?\/?$/,
				params: [{"name":"rest","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/docs/contributing/building-from-source",
				pattern: /^\/docs\/contributing\/building-from-source\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/docs/contributing/code-style",
				pattern: /^\/docs\/contributing\/code-style\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/docs/contributing/translating",
				pattern: /^\/docs\/contributing\/translating\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/docs/contributing/updates",
				pattern: /^\/docs\/contributing\/updates\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/docs/customize-settings/actions",
				pattern: /^\/docs\/customize-settings\/actions\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/docs/customize-settings/advanced",
				pattern: /^\/docs\/customize-settings\/advanced\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/docs/customize-settings/appearance",
				pattern: /^\/docs\/customize-settings\/appearance\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/docs/customize-settings/files-and-folders",
				pattern: /^\/docs\/customize-settings\/files-and-folders\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/docs/customize-settings/layout",
				pattern: /^\/docs\/customize-settings\/layout\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/docs/customize-settings/[...rest]",
				pattern: /^\/docs\/customize-settings(?:\/(.*))?\/?$/,
				params: [{"name":"rest","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/docs/features/cloud-drives",
				pattern: /^\/docs\/features\/cloud-drives\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/docs/features/command-palette",
				pattern: /^\/docs\/features\/command-palette\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/docs/features/folder-config",
				pattern: /^\/docs\/features\/folder-config\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/docs/features/ftp",
				pattern: /^\/docs\/features\/ftp\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/docs/features/git",
				pattern: /^\/docs\/features\/git\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/docs/features/integrations",
				pattern: /^\/docs\/features\/integrations\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/docs/features/layout-picker",
				pattern: /^\/docs\/features\/layout-picker\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/docs/features/tabs",
				pattern: /^\/docs\/features\/tabs\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/docs/features/tags",
				pattern: /^\/docs\/features\/tags\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/docs/install",
				pattern: /^\/docs\/install\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/download",
				pattern: /^\/download\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/download/preview",
				pattern: /^\/download\/preview\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/download/stable",
				pattern: /^\/download\/stable\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/themes",
				pattern: /^\/themes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 71 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
