import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
/* empty css                                                                 */
import { I as InfoBar } from "../../../../../chunks/InfoBar.js";
const metadata = { "title": "Cloud drives" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1hqvn75">Files integrates with various cloud providers by detecting and displaying their drives in the sidebar. These integrations require their respective clients to be installed and running on the device. You can refer to this list of supported cloud services along with download links for their desktop clients.</p> ${validate_component(InfoBar, "InfoBar").$$render(
    $$result,
    {
      title: "Please Note",
      severity: "caution"
    },
    {},
    {
      default: () => {
        return `Although we accommodate third-party cloud drives due to popular demand, these services are not officially endorsed by Files. We encourage users to research these services thoroughly and perform their own due diligence.`;
      }
    }
  )} <h2 id="supported-drives" data-svelte-h="svelte-11eytmp">Supported drives</h2> <table data-svelte-h="svelte-1ipm7lk"><thead><tr><th>Client</th> <th>Information / Download Link</th></tr></thead> <tbody><tr><td>OneDrive</td> <td>OneDrive is included with Windows and no additional setup is required.</td></tr> <tr><td>Google Drive</td> <td><a href="https://www.google.com/drive/download" rel="nofollow">https://www.google.com/drive/download</a></td></tr> <tr><td>iCloud</td> <td><a href="https://support.apple.com/103232" rel="nofollow">https://support.apple.com/103232</a></td></tr> <tr><td>Box</td> <td><a href="https://www.box.com/resources/downloads" rel="nofollow">https://www.box.com/resources/downloads</a></td></tr> <tr><td>Dropbox</td> <td><a href="https://www.dropbox.com/install" rel="nofollow">https://www.dropbox.com/install</a></td></tr> <tr><td>Mega</td> <td><a href="https://mega.io/desktop" rel="nofollow">https://mega.io/desktop</a></td></tr> <tr><td>Nextcloud</td> <td><a href="https://nextcloud.com/install" rel="nofollow">https://nextcloud.com/install</a></td></tr> <tr><td>Yandex</td> <td><a href="https://360.yandex.com/disk/download" rel="nofollow">https://360.yandex.com/disk/download</a></td></tr> <tr><td>Jottacloud</td> <td><a href="https://www.jottacloud.com/download" rel="nofollow">https://www.jottacloud.com/download</a></td></tr> <tr><td>SynologyDrive</td> <td><a href="https://www.synology.com/support/download" rel="nofollow">https://www.synology.com/support/download</a></td></tr> <tr><td>pCloud Drive</td> <td><a href="https://www.pcloud.com/download-free-online-cloud-file-storage.html" rel="nofollow">https://www.pcloud.com/download-free-online-cloud-file-storage.html</a></td></tr> <tr><td>Nutstore</td> <td><a href="https://www.jianguoyun.com/s/downloads" rel="nofollow">https://www.jianguoyun.com/s/downloads</a></td></tr> <tr><td>Seadrive</td> <td><a href="https://www.seafile.com/en/download" rel="nofollow">https://www.seafile.com/en/download</a></td></tr> <tr><td>Autodesk</td> <td><a href="https://drive.autodesk.com" rel="nofollow">https://drive.autodesk.com</a></td></tr> <tr><td>ownCloud</td> <td><a href="https://owncloud.com/desktop-app" rel="nofollow">https://owncloud.com/desktop-app</a></td></tr> <tr><td>Lucid Link</td> <td><a href="https://www.lucidlink.com/download" rel="nofollow">https://www.lucidlink.com/download</a></td></tr> <tr><td>Infomaniak kDrive</td> <td><a href="https://www.infomaniak.com/kdrive" rel="nofollow">https://www.infomaniak.com/kdrive</a></td></tr></tbody></table>`;
});
export {
  Page as default,
  metadata
};
