import{s as ze,h as l,C as a,j as s,M as o,D as r,q as d,i,x as ae,d as n}from"./scheduler.DCUrRz8L.js";import{S as qe,i as Ge}from"./index.DLqkoM2M.js";function Re(Se){let h,re="The astounding growth of the project over the last three years serves to motivate our journey to build the best file manager, alongside the community. More than ever, Files plays an important role in demonstrating how impactful the latest user experience improvements in WinUI can be. A notable experience we can reflect on was fixing an issue with screen reader accessibility reported by a blind user. More recently, we were delighted to hear from a seventy-seven-year-old “non-geek” who was impressed that we made file discovery “much easier” compared to the first party solution. Both of these stories highlight the inadvertent achievements that come from engaging the broader community.",q,y,de='Today we’re excited to not only introduce the next major release of <a href="https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-3">Files</a>, but also a series of future changes to sustain contributor momentum into 2023.',G,u,he="Files v2.3",R,C,ue="As part of our mission to create a stable and fully-featured file manager, we added a compact spacing feature, bulk actions experience in the conflicts dialog, and a double click gesture to navigate up one directory. Additionally, we focused on improving the behavior of existing features with the understanding that they’re most useful when they perform as expected.",U,F,ce="<strong>Compact sizing</strong> allows users to view more items on the screen",W,c,pe='<img src="/blog-resources/filesv2-3/CompactSpacing.png" alt="A screenshot of the new compact spacing option in Files v2.3."/>',D,T,me="The <strong>tab control</strong> was redesigned to connect with the tab content.",B,p,fe='<img src="/blog-resources/filesv2-3/Tabs.png" alt="A screenshot of the new tab design in Files v2.3."/>',E,_,we="We added an option to display <strong>tags</strong> on the sidebar",O,m,ge='<img src="/blog-resources/filesv2-3/Tags.png" alt="A screenshot of the new tags section on the sidebar in Files v2.3."/>',V,H,ve="Added support for applying bulk actions in the <strong>conflicts dialog</strong>",$,f,xe='<img src="/blog-resources/filesv2-3/BulkActions.png" alt="A screenshot of the redesigned conflicts dialog in Files v2.3."/>',K,w,be="Other changes",N,M,ye="<li>Improved the reliability and speed of drag and drop</li> <li>Added a pull to refresh gesture</li> <li>Removed the minimize and maximize buttons from the properties window</li> <li>Added an animation when clicking on the setting and search buttons</li> <li>Added an option to always show icons instead of thumbnails</li> <li>Improved the spacing in the pathbar</li> <li>Added a chevron to the pathbar to better indicate that there is a flyout menu</li> <li>Reduced the spacing between widgets on the home page</li> <li>Double clicking the grid splitter will now reset panes in the dual pane layout to the default width</li> <li>More file types are now displayed in the “new” item context menu</li> <li>Double clicking in a blank space will now go up one directory in the file tree</li> <li>Adding a tag to a file no longer changes the date modified property</li> <li>Added a shortcut to open folders in the default terminal <code>ctrl</code> + <code>shift</code> + <code>&#39;</code></li> <li>Added a shortcut to play and pause media in the preview pane <code>ctrl</code> + <code>space</code></li> <li>Reduced the height of items in the sidebar to allow more items to be displayed at once</li> <li>Invalid favorites and network shares are no longer removed the sidebar</li> <li>Added a context menu to hide sections when right clicking on the sidebar</li> <li>Added support for renaming items in the conflicts dialog</li> <li>Network shares will automatically refresh when their content changes</li> <li>Auto select first item in user list for permissions</li> <li>Auto select the primary button in the empty recycle bin dialog</li> <li>Deleting an item will automatically move the focus to the next item in the list</li> <li>Resizing the window no longer changes the width of columns in the details layout</li> <li>Added examples to the date format setting</li> <li>Improved behavior when trying to name an item with invalid characters</li> <li>Added a notification when copying or moving an item fails</li> <li>Added the archive name to the extract archive dialog</li> <li>Added support for adding tags to items in the search results page</li> <li>Show which process is locking a file</li>",X,g,Ce="Bug fixes",J,k,Fe="<li>Fixed an issue where the address toolbar height would sometimes change when clicking on the search box</li> <li>Fixed an issue that would cause the app window to close when dragging a tab to a new window</li> <li>Fixed a crash that would sometimes occur when deleting files</li> <li>Fixed an issue where expanding the sidebar sections would sometimes require two clicks</li> <li>Fixed an issue where the sidebar state would sometimes get reset</li> <li>Fixed an issue where duplicate drives were sometimes added to the sidebar</li> <li>Fixed a crash that would sometimes occur when the favorites section was hidden</li> <li>Fixed an issue where the UI didn’t display correctly in compact overlay mode</li> <li>Fixed an issue where the close pane button had the wrong icon</li> <li>Fixed an issue where the disconnect drive option had the wrong icon</li> <li>Fixed a crash that would sometimes occur when “show folder sizes” was enabled</li> <li>Fixed an issue where the properties window sometimes used the wrong theme</li> <li>Fixed a crash that would sometimes occur when previewing XML files</li> <li>Fixed an issue that would sometimes prevent drag and drop from working</li> <li>Fixed an issue where the clear all properties option didn’t have any text</li> <li>Fixed an issue where the import settings option didn’t import all the settings</li> <li>Fixed an issue where rotating an image multiple times would sometimes crash the app</li> <li>Fixed an issue where the app would sometimes hang on startup</li> <li>Fixed an issue where Box cloud drives didn’t properly display files</li> <li>Fixed an issue where the <code>ctrl</code> + <code>l</code> and <code>alt</code> + <code>d</code> shortcuts didn’t set the focus to the address bar on the home page</li> <li>Fixed an issue where pasting text in the search box would paste the clipboard content into the current directory</li> <li>Fixed an issue where the overflow options weren’t shown when right clicking on search results</li> <li>Fixed an issue that prevented adding items into archives</li> <li>Fixed an issue where extra toolbar buttons were visible in recycle bin</li> <li>Fixed an issue where the tags section was sometimes visible in the context menu even after turning off the experimental setting</li> <li>Fixed an issue where switching the app theme would make the group headers unreadable until restarting the app</li> <li>Fixed an issue where the option to show dot files didn’t work in WSL and network folders</li> <li>Fixed an issue where the confirm delete dialog didn’t display when dragging an item to recycle bin</li>",Q,L,Te='The full list of improvements and bug fixes can be found <a href="https://github.com/files-community/Files/releases" rel="nofollow">here</a>',Y,v,_e="The next generation of Files",Z,A,He="This milestone marks the beginning of a reinvigorated effort to modernize and improve the architecture of the Files codebase. A well-architected, testable codebase will not only attract new contributors, but enables us to offer platform specific benefits in the long run. Furthermore, we will be able to iterate faster, accelerating our transition to the Windows App SDK. Switching will remove longstanding limitations in the present app model and will enable us to deliver improvements in net performance and reliability.",ee,P,Me="We hope to share more about this effort in the coming months.",te,j,ke='We view these steps as critical to continuing the great work on Files. The best way for you to support current and future efforts is to <a href="https://github.com/sponsors/yaira2" rel="nofollow">sponsor</a> us on GitHub.',ie,x,Le="Giving back to the community",ne,I,Ae="The Files contributors are pleased to announce that the main application repository has been relicensed under the MIT license. This means that other projects can now take advantage of our innovation even if they happen to be closed source.",le,b,Pe="Feedback",se,S,je=`Files thrives off community feedback because it helps shape the features worked on and makes the app better for
everyone. We invite you to submit your feedback through our GitHub repository.`,oe,z,Ie=`Download from
the <a href="https://www.microsoft.com/store/apps/9nghp3dx8hdx?cid=AnnouncingV2-3">Microsoft Store</a>
|| See Files on <a href="https://github.com/files-community/Files" rel="nofollow">GitHub</a>`;return{c(){h=l("p"),h.textContent=re,q=a(),y=l("p"),y.innerHTML=de,G=a(),u=l("h2"),u.textContent=he,R=a(),C=l("p"),C.textContent=ue,U=a(),F=l("p"),F.innerHTML=ce,W=a(),c=l("figure"),c.innerHTML=pe,D=a(),T=l("p"),T.innerHTML=me,B=a(),p=l("figure"),p.innerHTML=fe,E=a(),_=l("p"),_.innerHTML=we,O=a(),m=l("figure"),m.innerHTML=ge,V=a(),H=l("p"),H.innerHTML=ve,$=a(),f=l("figure"),f.innerHTML=xe,K=a(),w=l("h2"),w.textContent=be,N=a(),M=l("ul"),M.innerHTML=ye,X=a(),g=l("h2"),g.textContent=Ce,J=a(),k=l("ul"),k.innerHTML=Fe,Q=a(),L=l("p"),L.innerHTML=Te,Y=a(),v=l("h2"),v.textContent=_e,Z=a(),A=l("p"),A.textContent=He,ee=a(),P=l("p"),P.textContent=Me,te=a(),j=l("p"),j.innerHTML=ke,ie=a(),x=l("h3"),x.textContent=Le,ne=a(),I=l("p"),I.textContent=Ae,le=a(),b=l("h2"),b.textContent=Pe,se=a(),S=l("p"),S.textContent=je,oe=a(),z=l("p"),z.innerHTML=Ie,this.h()},l(e){h=s(e,"P",{"data-svelte-h":!0}),o(h)!=="svelte-q9j05x"&&(h.textContent=re),q=r(e),y=s(e,"P",{"data-svelte-h":!0}),o(y)!=="svelte-spt146"&&(y.innerHTML=de),G=r(e),u=s(e,"H2",{id:!0,"data-svelte-h":!0}),o(u)!=="svelte-eteuh1"&&(u.textContent=he),R=r(e),C=s(e,"P",{"data-svelte-h":!0}),o(C)!=="svelte-1ncm8ug"&&(C.textContent=ue),U=r(e),F=s(e,"P",{"data-svelte-h":!0}),o(F)!=="svelte-62380h"&&(F.innerHTML=ce),W=r(e),c=s(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(c)!=="svelte-uj0cb0"&&(c.innerHTML=pe),D=r(e),T=s(e,"P",{"data-svelte-h":!0}),o(T)!=="svelte-akhajn"&&(T.innerHTML=me),B=r(e),p=s(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(p)!=="svelte-8d8y9g"&&(p.innerHTML=fe),E=r(e),_=s(e,"P",{"data-svelte-h":!0}),o(_)!=="svelte-n1366t"&&(_.innerHTML=we),O=r(e),m=s(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(m)!=="svelte-6lmplw"&&(m.innerHTML=ge),V=r(e),H=s(e,"P",{"data-svelte-h":!0}),o(H)!=="svelte-16o8yoz"&&(H.innerHTML=ve),$=r(e),f=s(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(f)!=="svelte-zydqax"&&(f.innerHTML=xe),K=r(e),w=s(e,"H2",{id:!0,"data-svelte-h":!0}),o(w)!=="svelte-1a46yv3"&&(w.textContent=be),N=r(e),M=s(e,"UL",{"data-svelte-h":!0}),o(M)!=="svelte-rp28jt"&&(M.innerHTML=ye),X=r(e),g=s(e,"H2",{id:!0,"data-svelte-h":!0}),o(g)!=="svelte-1v6w9dr"&&(g.textContent=Ce),J=r(e),k=s(e,"UL",{"data-svelte-h":!0}),o(k)!=="svelte-1dgqhxs"&&(k.innerHTML=Fe),Q=r(e),L=s(e,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1oxk236"&&(L.innerHTML=Te),Y=r(e),v=s(e,"H2",{id:!0,"data-svelte-h":!0}),o(v)!=="svelte-1b9cvzy"&&(v.textContent=_e),Z=r(e),A=s(e,"P",{"data-svelte-h":!0}),o(A)!=="svelte-17lembc"&&(A.textContent=He),ee=r(e),P=s(e,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1k6cfaa"&&(P.textContent=Me),te=r(e),j=s(e,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1xx7w4u"&&(j.innerHTML=ke),ie=r(e),x=s(e,"H3",{id:!0,"data-svelte-h":!0}),o(x)!=="svelte-1fxg2bq"&&(x.textContent=Le),ne=r(e),I=s(e,"P",{"data-svelte-h":!0}),o(I)!=="svelte-ey292q"&&(I.textContent=Ae),le=r(e),b=s(e,"H2",{id:!0,"data-svelte-h":!0}),o(b)!=="svelte-1bvg59y"&&(b.textContent=Pe),se=r(e),S=s(e,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1wo36cl"&&(S.textContent=je),oe=r(e),z=s(e,"P",{"data-svelte-h":!0}),o(z)!=="svelte-nca0xn"&&(z.innerHTML=Ie),this.h()},h(){d(u,"id","files-v23"),d(c,"class","margin-bottom"),d(p,"class","margin-bottom"),d(m,"class","margin-bottom"),d(f,"class","margin-bottom"),d(w,"id","other-changes"),d(g,"id","bug-fixes"),d(v,"id","the-next-generation-of-files"),d(x,"id","giving-back-to-the-community"),d(b,"id","feedback")},m(e,t){i(e,h,t),i(e,q,t),i(e,y,t),i(e,G,t),i(e,u,t),i(e,R,t),i(e,C,t),i(e,U,t),i(e,F,t),i(e,W,t),i(e,c,t),i(e,D,t),i(e,T,t),i(e,B,t),i(e,p,t),i(e,E,t),i(e,_,t),i(e,O,t),i(e,m,t),i(e,V,t),i(e,H,t),i(e,$,t),i(e,f,t),i(e,K,t),i(e,w,t),i(e,N,t),i(e,M,t),i(e,X,t),i(e,g,t),i(e,J,t),i(e,k,t),i(e,Q,t),i(e,L,t),i(e,Y,t),i(e,v,t),i(e,Z,t),i(e,A,t),i(e,ee,t),i(e,P,t),i(e,te,t),i(e,j,t),i(e,ie,t),i(e,x,t),i(e,ne,t),i(e,I,t),i(e,le,t),i(e,b,t),i(e,se,t),i(e,S,t),i(e,oe,t),i(e,z,t)},p:ae,i:ae,o:ae,d(e){e&&(n(h),n(q),n(y),n(G),n(u),n(R),n(C),n(U),n(F),n(W),n(c),n(D),n(T),n(B),n(p),n(E),n(_),n(O),n(m),n(V),n(H),n($),n(f),n(K),n(w),n(N),n(M),n(X),n(g),n(J),n(k),n(Q),n(L),n(Y),n(v),n(Z),n(A),n(ee),n(P),n(te),n(j),n(ie),n(x),n(ne),n(I),n(le),n(b),n(se),n(S),n(oe),n(z))}}}const Ue={title:"Introducing the next major release of Files - v2.3",description:"We're excited to not only introduce the next major release of Files, but also a series of future changes to sustain contributor momentum into 2023.",thumbnail:"/blog-resources/filesv2-3/HeroImage.jpg",date:"2022-7-5",author:"files-community"};class We extends qe{constructor(h){super(),Ge(this,h,null,Re,ze,{})}}const Ee=Object.freeze(Object.defineProperty({__proto__:null,default:We,metadata:Ue},Symbol.toStringTag,{value:"Module"}));export{We as P,Ee as _};
