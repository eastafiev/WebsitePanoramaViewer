import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const metadata = {
  "title": "Announcing Files v3.4",
  "description": "Enhance your Files experience with new features that allow you to filter file names, customize keyboard shortcuts, set a unique background image, and integrate with the powerful search utility, Listary.",
  "thumbnail": "/blog-resources/v3-4/Hero.png",
  "date": "5/8/2024",
  "author": "files-community"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-5e2x1u">We’re excited to announce that starting today, Files v3.4 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.</p> <p data-svelte-h="svelte-1wysjtv"><strong>TL;DR:</strong> The latest update, Files v3.4, introduces new features including file name filtering, customizable keyboard shortcuts, personal background images, and a Listary integration, among others. Continue reading to learn more about these enhancements.</p> <h2 id="whats-new-in-v34" data-svelte-h="svelte-2pbqju">What’s new in v3.4</h2> <h3 id="personalize-files-with-a-custom-background-image" data-svelte-h="svelte-bbngd4">Personalize Files with a custom background image</h3> <p data-svelte-h="svelte-ipa0iw">We added a new theming feature that allows you to add a personal touch to Files by setting a custom background image. Simply go to Settings &gt; Appearance, locate the “Background Image” section, and click “Browse” to choose your preferred image.</p> <p data-svelte-h="svelte-ek1yru">In addition to the Settings page, you can also change the background directly by right-clicking on an image and selecting “Set as app background”.</p> <figure data-svelte-h="svelte-1ozvtl8"><img src="/blog-resources/v3-4/BackgroundImageContextMenu.png" alt="Set as application background context menu"></figure> <p data-svelte-h="svelte-1caq2ke">Once selected, Files will update to display your image as a beautiful background, adding a distinctive touch to your workspace. Additionally, you can adjust the image’s opacity and display settings for a truly customized look.</p> <figure data-svelte-h="svelte-tmkvl6"><img src="/blog-resources/v3-4/BackgroundImage.png" alt="Custom background image"></figure> <h3 id="remap-keyboard-shortcuts" data-svelte-h="svelte-qghd56">Remap keyboard shortcuts</h3> <p data-svelte-h="svelte-13fb30">We added a new settings page for Actions that enables you to personalize keyboard shortcuts. This feature lets you assign shortcuts to any action and offers the flexibility to modify existing key bindings. Customize your keyboard layout to enhance your workflow efficiency.</p> <figure data-svelte-h="svelte-ggc3t9"><img src="/blog-resources/v3-4/Actions.png" alt="Actions settings page"></figure> <h3 id="filter-file-names-in-real-time" data-svelte-h="svelte-1tb4s1g">Filter file names in real-time</h3> <p data-svelte-h="svelte-s8fy86">We’ve enhanced our search functionality to allow for more efficient file management within the current directory. With the new filtering feature, inputting a query into the search bar instantly filters the directory, displaying only the files that match your criteria.</p> <p data-svelte-h="svelte-4a498x">This real-time filtering saves time and is particularly beneficial for users who work with large numbers of files and require quick access to specific documents.</p> <figure data-svelte-h="svelte-1iwclb"><img src="/blog-resources/v3-4/Filter.png" alt="Filter file names"></figure> <h3 id="added-an-integration-with-listary" data-svelte-h="svelte-1m92bme">Added an integration with Listary</h3> <p data-svelte-h="svelte-14dde2r">We’re excited to announce a new integration with <a href="https://www.listary.com/" rel="nofollow">Listary</a> - a powerful search utility renowned for its rapid retrieval of files and folders. This integration can be enabled from the “Integrations” page within Listary’s settings. This integration includes the following features:</p> <p data-svelte-h="svelte-1na80wl"><strong>Instant search results</strong>: A double tap of the <code>ctrl</code> key brings up the search bar, delivering immediate access to your files.</p> <figure data-svelte-h="svelte-1fx1m8e"><img src="/blog-resources/v3-4/Listary.png" alt="Listary search box"></figure> <p data-svelte-h="svelte-1lpu2u1"><strong>Contextual power</strong>: Engage with Listary’s rich context menu by right-clicking any search result, unlocking a vast array of actions right where you need them.</p> <figure data-svelte-h="svelte-1fd6ot0"><img src="/blog-resources/v3-4/ListaryMenu.png" alt="Listary context menu"></figure> <p data-svelte-h="svelte-bufygs"><strong>Quick switch</strong>: Seamlessly transition to the active folder in Files when opening or saving documents via another application. Additionally, once the file dialog appears, you can also switch to Files, navigate to your desired folder—such as a pinned location—and upon returning to the dialog, it will automatically update to reflect your chosen folder.</p> <figure data-svelte-h="svelte-q6o02p"><img src="/blog-resources/v3-4/ListaryQuickSwitch.png" alt="Listary Quick Switch feature"></figure> <p data-svelte-h="svelte-122q7xa"><strong>Folder navigation</strong>: Discover the ease of navigating to folders; a single click on any folder in the search results instantly opens it in the current tab or pane of Files.</p> <p data-svelte-h="svelte-zpykvf">For additional details and support regarding Listary, you can visit their website <a href="https://help.listary.com/options-integration#third-party-software-adapted-by-listary" rel="nofollow">https://help.listary.com/options-integration#third-party-software-adapted-by-listary</a>.</p> <h3 id="new-localizations-added" data-svelte-h="svelte-43xg0g">New localizations added</h3> <p data-svelte-h="svelte-2zsfcy">Responding to user requests, we’ve expanded our language support to include Albanian, Khmer, Kurdish, and Lithuanian.  Our localizations are largely maintained by our dedicated community members. If you’d like to get involved, we invite you to join us on Crowdin <a href="https://crowdin.com/project/files-app" rel="nofollow">https://crowdin.com/project/files-app</a>.</p> <h2 id="changes-and-improvements" data-svelte-h="svelte-zx5w86">Changes and Improvements</h2> <ul data-svelte-h="svelte-169wxw"><li>The Recent Files widget now respects the setting for displaying file extensions</li> <li>Improved the display of keyboard shortcuts in the Command Palette</li> <li>Added support to the sidebar for multiple SharePoint drives</li> <li>Added an integration for the Lucid Link cloud provider</li> <li>Added audio bitrate, and video to the list of properties in the Details Pane</li> <li>Fixed an issue where pinned items weren’t displayed in the sidebar</li> <li>Fixed an issue clicking the header in the details view wouldn’t change the sort direction</li> <li>Fixed an issue where the adaptive layout option wasn’t disabled when syncing layout settings</li> <li>Fixed an issue where changing the sort preferences didn’t work properly when syncing layout settings</li> <li>Fixed an issue where existing tabs would duplicate when opening a folder from outside of Files</li> <li>Fixed an issue where the Properties Window wouldn’t navigate between pages after returning from advanced settings</li> <li>Fixed an issue where the app would sometimes crash when entering characters into the Address Bar</li> <li>Fixed the alignment of the add tab button</li> <li>Fixed an issue where the Git submenu was sometimes shown for non-GitHub repos</li> <li>Fixed a crash that would sometimes occur when closing the GitHub login modal</li> <li>Fixed an issue where Recycle Bin wasn’t pinned to the Sidebar by default</li> <li>Fixed an issue where the View More and Open All options where disabled in the Tags widget</li> <li>Fixed an issue where the scroll position was sometimes incorrect</li> <li>Fixed an issue where “Scroll to previous folder” didn’t work in some folders</li> <li>Fixed an issue where HWiNFO64.exe wouldn’t open</li> <li>Fixed an issue where changing the focus in columns view caused an extra animation</li> <li>Fixed an issue where the app window wasn’t refocused if minimized on launch</li> <li>Fixed an issue where the conflicts dialog didn’t append numbers when pasting files</li> <li>Fixed an issue where renaming an item in the conflict dialog would leave the copy status in process</li> <li>Fixed an issue where the setting control margin was misaligned</li> <li>Fixed an issue with exporting tags</li> <li>Fixed an issue where certain drive icons didn’t load on the Drive Widget</li> <li>Fixed an issue where ftp addresses were not displayed in the Address Bar</li> <li>Fixed an issue where coping or moving a folder would cause the contents of the destination folder to be empty</li> <li>Fixed an issue where there wasn’t enough space to right click folders in columns view</li> <li>Fixed an issue where the wrong item was shown as active in the sidebar</li> <li>Fixed an issue where holding the arrow key would cause the Preview Pane to freeze</li> <li>Fixed an issue with editing properties of multiple items at the same time</li> <li>Fixed a conflict with svg thumbnails generated by PowerToys</li> <li>Fixed an issue of overlapping brushes leaving a gap in the columns view</li></ul> <h3 id="conclusion" data-svelte-h="svelte-toxqw4">Conclusion</h3> <p data-svelte-h="svelte-1nk76uf">As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.</p> <p data-svelte-h="svelte-1q4h339">Thank you for using Files! 😊</p> <hr> <p data-svelte-h="svelte-1hrads6">Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a></p>`;
});
export {
  Page as default,
  metadata
};
