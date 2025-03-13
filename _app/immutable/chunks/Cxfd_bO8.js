import{s as Se,v as ne,d as i,i as n,q as v,m as l,N as s,D as a,o,E as r}from"./m8XikJfs.js";import{S as ke,i as Ee}from"./CVWWWevV.js";function Pe(Le){let d,le='We’re excited to announce that starting today, Files v3.1 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.',z,g,oe="<strong>TL;DR:</strong> Files v3.1 adds an icon to the system tray, support for opening a minimized window on startup, smart extract, an option to prioritize files when sorting, group files by day, and more. Continue reading to learn more about these changes.",I,u,se="What’s new in v3.1",R,h,ae="System tray icon",G,b,re="With the recently added option to keep Files open in the background, a popular request has been to add an icon to the system tray. Besides for indicating when there is an open process, right clicking the icon provides a shortcut to the documentation site and a way to fully close the background process.",O,C,de='<img src="/blog-resources/v3-1/SystemTray.png" alt="System tray icon"/>',W,p,ue="Open minimized on Windows Startup",A,y,he="Enabling the option to “Open Files on Windows Startup” and the option to “Keep Files running in the background” will now open Files in the background when starting Windows.",q,c,pe="Extract archives with “Smart Extract”",j,F,ce="Smart Extract is a new feature that will automatically choose the extraction mode based on the archive contents. If the archive contains a single file or folder, Smart Extract will extract the archive to the current directory, otherwise if there are multiple items, they will be extracted to a new folder. Smart Extract can be accessed via the <code>ctrl</code> + <code>shift</code> + <code>e</code> shortcut as well as the right click context menu.",N,_,fe='<img src="/blog-resources/v3-1/SmartExtract.png" alt="Smart Extract"/>',D,f,me="Prioritize files when sorting",U,H,xe="We added an option to prioritize files when sorting. Enabling this option will sort files and folders separately with files being placed at the top of the list. This feature is an addition to the existing options to “sort folders first” and “sort files and folders together”.",Y,T,we='<img src="/blog-resources/v3-1/SortFilesFirst.png" alt="Prioritize files when sorting"/>',B,m,ve="Drag and drop to open folders in a new tab",K,M,ge="Dragging & dropping a folder on the title bar will now open the folder in a new tab. This gesture also works with multiple folders, dragging multiple folders will open each folder in its own tab.",J,L,be='<img src="/blog-resources/v3-1/OpenInNewTab.png" alt="Open folders in new tab"/>',Q,x,Ce="Changes and Improvements",V,S,ye="<li>Added a prompt when trying to apply tags on non NTFS drives</li> <li>Improved the animation when expanding/collapsing sidebar sections</li> <li>Increased the number of suggestion in the search dropdown to 10 items</li> <li>Opening libraries in the columns view will treat them as root</li> <li>Added a 2gb splitting option when compressing files</li> <li>Added support for displaying recently entered paths</li> <li>Added an option to group items by day</li> <li>Added support for hiding compression options from the context menu</li> <li>Added an out-of-proc WinRT server for long-running background tasks</li> <li>Fixed an issue where third party licenses weren’t displayed</li> <li>Fixed crash that could occur when manipulating invalid images</li> <li>Fixed issue where options in the conflicts dialog would sometimes change when scrolling</li> <li>Fixed crash that could occur when failing to connect to GitHub</li> <li>Fixed the date in the file name when pasting clipboard content</li> <li>Fixed an issue where the selection would sometimes get reset in the rename text box</li> <li>Fixed an issue where resizing the window would reload the preview pane</li> <li>Fixed crash when navigating up in the column layout</li> <li>Fixed issue where “Reopen closed tab” was always disabled when right-clicking on tabs</li> <li>Fixed crash that could occur when trying to open Git settings</li> <li>Fixed issue where text was cut off in Tags flyout</li> <li>Fixed issue where the column headers weren’t always “sticky”</li> <li>Fixed issue where it wouldn’t work to open Files if a previous instance crashed</li> <li>Fixed exception that would sometimes occur when sharing items</li> <li>Fixed NullReferenceException when renaming files</li> <li>Fixed NullReferenceException in ColumnShellPage.NavigateToPath</li> <li>Fixed issue where batch files were opened as system</li> <li>Fixed the taskbar behavior in full screen mode</li> <li>Fixed COMException when removing focus from the path bar</li>",X,w,Fe="Conclusion",Z,k,_e='As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.',$,E,He="Thank you for using Files! 😊",ee,te,ie,P,Te='Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a>';return{c(){d=o("p"),d.innerHTML=le,z=r(),g=o("p"),g.innerHTML=oe,I=r(),u=o("h2"),u.textContent=se,R=r(),h=o("h3"),h.textContent=ae,G=r(),b=o("p"),b.textContent=re,O=r(),C=o("figure"),C.innerHTML=de,W=r(),p=o("h3"),p.textContent=ue,A=r(),y=o("p"),y.textContent=he,q=r(),c=o("h3"),c.textContent=pe,j=r(),F=o("p"),F.innerHTML=ce,N=r(),_=o("figure"),_.innerHTML=fe,D=r(),f=o("h3"),f.textContent=me,U=r(),H=o("p"),H.textContent=xe,Y=r(),T=o("figure"),T.innerHTML=we,B=r(),m=o("h3"),m.textContent=ve,K=r(),M=o("p"),M.textContent=ge,J=r(),L=o("figure"),L.innerHTML=be,Q=r(),x=o("h2"),x.textContent=Ce,V=r(),S=o("ul"),S.innerHTML=ye,X=r(),w=o("h3"),w.textContent=Fe,Z=r(),k=o("p"),k.innerHTML=_e,$=r(),E=o("p"),E.textContent=He,ee=r(),te=o("hr"),ie=r(),P=o("p"),P.innerHTML=Te,this.h()},l(e){d=l(e,"P",{"data-svelte-h":!0}),s(d)!=="svelte-e8msrx"&&(d.innerHTML=le),z=a(e),g=l(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-1kz3e4x"&&(g.innerHTML=oe),I=a(e),u=l(e,"H2",{id:!0,"data-svelte-h":!0}),s(u)!=="svelte-psktfa"&&(u.textContent=se),R=a(e),h=l(e,"H3",{id:!0,"data-svelte-h":!0}),s(h)!=="svelte-1m8shgy"&&(h.textContent=ae),G=a(e),b=l(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1r2gdln"&&(b.textContent=re),O=a(e),C=l(e,"FIGURE",{"data-svelte-h":!0}),s(C)!=="svelte-1e343mj"&&(C.innerHTML=de),W=a(e),p=l(e,"H3",{id:!0,"data-svelte-h":!0}),s(p)!=="svelte-f0ckve"&&(p.textContent=ue),A=a(e),y=l(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1678i6q"&&(y.textContent=he),q=a(e),c=l(e,"H3",{id:!0,"data-svelte-h":!0}),s(c)!=="svelte-1xg9szh"&&(c.textContent=pe),j=a(e),F=l(e,"P",{"data-svelte-h":!0}),s(F)!=="svelte-deghsi"&&(F.innerHTML=ce),N=a(e),_=l(e,"FIGURE",{"data-svelte-h":!0}),s(_)!=="svelte-10tm6qa"&&(_.innerHTML=fe),D=a(e),f=l(e,"H3",{id:!0,"data-svelte-h":!0}),s(f)!=="svelte-llfmeb"&&(f.textContent=me),U=a(e),H=l(e,"P",{"data-svelte-h":!0}),s(H)!=="svelte-83uhnn"&&(H.textContent=xe),Y=a(e),T=l(e,"FIGURE",{"data-svelte-h":!0}),s(T)!=="svelte-rwxkpx"&&(T.innerHTML=we),B=a(e),m=l(e,"H3",{id:!0,"data-svelte-h":!0}),s(m)!=="svelte-1j4cuhj"&&(m.textContent=ve),K=a(e),M=l(e,"P",{"data-svelte-h":!0}),s(M)!=="svelte-3cmb20"&&(M.textContent=ge),J=a(e),L=l(e,"FIGURE",{"data-svelte-h":!0}),s(L)!=="svelte-1p6iraz"&&(L.innerHTML=be),Q=a(e),x=l(e,"H2",{id:!0,"data-svelte-h":!0}),s(x)!=="svelte-zx5w86"&&(x.textContent=Ce),V=a(e),S=l(e,"UL",{"data-svelte-h":!0}),s(S)!=="svelte-loan6m"&&(S.innerHTML=ye),X=a(e),w=l(e,"H3",{id:!0,"data-svelte-h":!0}),s(w)!=="svelte-toxqw4"&&(w.textContent=Fe),Z=a(e),k=l(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-1nk76uf"&&(k.innerHTML=_e),$=a(e),E=l(e,"P",{"data-svelte-h":!0}),s(E)!=="svelte-1q4h339"&&(E.textContent=He),ee=a(e),te=l(e,"HR",{}),ie=a(e),P=l(e,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1hrads6"&&(P.innerHTML=Te),this.h()},h(){v(u,"id","whats-new-in-v31"),v(h,"id","system-tray-icon"),v(p,"id","open-minimized-on-windows-startup"),v(c,"id","extract-archives-with-smart-extract"),v(f,"id","prioritize-files-when-sorting"),v(m,"id","drag-and-drop-to-open-folders-in-a-new-tab"),v(x,"id","changes-and-improvements"),v(w,"id","conclusion")},m(e,t){n(e,d,t),n(e,z,t),n(e,g,t),n(e,I,t),n(e,u,t),n(e,R,t),n(e,h,t),n(e,G,t),n(e,b,t),n(e,O,t),n(e,C,t),n(e,W,t),n(e,p,t),n(e,A,t),n(e,y,t),n(e,q,t),n(e,c,t),n(e,j,t),n(e,F,t),n(e,N,t),n(e,_,t),n(e,D,t),n(e,f,t),n(e,U,t),n(e,H,t),n(e,Y,t),n(e,T,t),n(e,B,t),n(e,m,t),n(e,K,t),n(e,M,t),n(e,J,t),n(e,L,t),n(e,Q,t),n(e,x,t),n(e,V,t),n(e,S,t),n(e,X,t),n(e,w,t),n(e,Z,t),n(e,k,t),n(e,$,t),n(e,E,t),n(e,ee,t),n(e,te,t),n(e,ie,t),n(e,P,t)},p:ne,i:ne,o:ne,d(e){e&&(i(d),i(z),i(g),i(I),i(u),i(R),i(h),i(G),i(b),i(O),i(C),i(W),i(p),i(A),i(y),i(q),i(c),i(j),i(F),i(N),i(_),i(D),i(f),i(U),i(H),i(Y),i(T),i(B),i(m),i(K),i(M),i(J),i(L),i(Q),i(x),i(V),i(S),i(X),i(w),i(Z),i(k),i($),i(E),i(ee),i(te),i(ie),i(P))}}}const Me={title:"Announcing Files v3.1",description:"System tray icon, open minimized on startup, Smart Extract, prioritize files when sorting, and a new drag & drop gesture.",thumbnail:"/blog-resources/v3-1/Hero.png",date:"1/8/2024",author:"files-community"},{title:Ge,description:Oe,thumbnail:We,date:Ae,author:qe}=Me;class ze extends ke{constructor(d){super(),Ee(this,d,null,Pe,Se,{})}}const je=Object.freeze(Object.defineProperty({__proto__:null,default:ze,metadata:Me},Symbol.toStringTag,{value:"Module"}));export{ze as P,je as _};
