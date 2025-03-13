import{s as at,h as l,C as s,j as o,M as a,D as r,q as d,i,x as Fe,d as n}from"./scheduler.DCUrRz8L.js";import{S as rt,i as dt}from"./index.DLqkoM2M.js";function ut(st){let u,Te='We’re excited to announce that starting today, Files v3.5 is now available. If you already have Files, there should be a notification on the toolbar to install the update. Otherwise, you can download Files for free from our <a href="/download/">download page</a>. You can also purchase Files on the <a href="ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&amp;cid=FilesWebsite">Microsoft Store</a> or sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a> to help support the project.',R,H,ke="<strong>TL;DR:</strong> The latest update, Files v3.5, introduces a refreshed design, a new widget for network drives, improved multitasking with dual-pane enhancements, and better crash reports to help us improve stability, among others. Continue reading to learn more about these enhancements.",B,h,Le="What’s new in v3.5",V,p,Me="Updated the design with rounded corners",Y,_,Pe="We’ve enhanced Files aesthetics by applying rounded corners to additional UI surfaces, including the toolbar, content area, and preview pane. This refinement improves the overall consistency and visual flow throughout the app.",K,F,Ae='<img src="/blog-resources/v3-5/UpdatedDesign.png" alt="Updated design with rounded corners"/>',Q,T,je="Additionally, Dual Pane mode now features a more pronounced shadow on the active pane and expanded spacing between panes. These enhancements ensure that the active pane is more visually prominent.",J,k,ze='<img src="/blog-resources/v3-5/UpdatedDualPaneDesign.png" alt="Updated design for Dual Pane"/>',X,c,De="View dimensions when hovering over images",Z,L,Ie="When you hover over images, a tooltip will now conveniently show the dimensions. This enhancement greatly improves user experience by providing quick and easy access to size information.",$,M,Ue='<img src="/blog-resources/v3-5/ImageSizeTooltip.png" alt="Images tooltip"/>',ee,f,We="Open batch files in Notepad directly from the toolbar",te,P,Ee="Upon selecting a batch (.bat) file, the toolbar will now present an Edit in Notepad option, streamlining the process of modifying your batch files directly without the need to dig through context menus.",ie,A,Oe='<img src="/blog-resources/v3-5/EditInNotepad.png" alt="Edit in notepad toolbar button"/>',ne,v,Se="Explore network locations on the Home Page",le,j,qe="We added a “Network Locations” widget on the home page. This feature is designed to help you navigate and organize network locations with greater efficiency.",oe,z,Ge='<img src="/blog-resources/v3-5/NetworkLocations.png" alt="Home page widget for network locations"/>',se,m,Ne="Added support for closing the left pane in Dual Pane mode",ae,D,Re="We’ve added the ability to close the left pane in Dual Pane mode, overcoming previous technical limitations that only allowed closing the right pane. This improvements provides a more versatile and user-friendly experience.",re,w,Be="OneDrive sync status indicator",de,I,Ve="Experience enhanced clarity when you hover over a file in OneDrive locations. The sync icon will now display a tooltip detailing the file’s current sync status, offering a more direct and informative snapshot of your data synchronization.",ue,x,Ye="View duration for selected video files",he,U,Ke="When selecting multiple video files, the Details Pane will now display the total duration.",pe,g,Qe="New localizations added",ce,W,Je='We’ve expanded our language support to now include Belarusian.  Our localizations are largely maintained by our dedicated community members. If you’d like to get involved, we invite you to join us on Crowdin <a href="https://crowdin.com/project/files-app" rel="nofollow">https://crowdin.com/project/files-app</a>.',fe,C,Xe="Improvements to crash reporting and metrics",ve,E,Ze="While enhancements in performance and stability typically occur behind the scenes, we often get a lot of questions about our work in this area and we wanted to share some highlights.",me,O,$e="<li>We’ve adopted Sentry for more robust crash reporting (shoutout to Sentry for their support of open-source projects), and we aim to extend its use to monitor performance metrics, ensuring Files gets faster with each update.</li> <li>Our main challenge with startup speed has been the absence of Native AOT in WinAppSdk. Fortunately, Microsoft is working to address this, and we hope to integrate these advancements later in the year.</li> <li>We recently started a new effort to eliminate unnecessary dependencies and streamline app resources, effectively shrinking the app’s footprint on your device.</li>",we,y,et="Changes and Improvements",xe,S,tt="<li>Added an action to switch focus between panes</li> <li>Added an “Edit in notepad” option to the right click context menu</li> <li>Added a setting to configure the “Open in ide” button on the status bar</li> <li>Added support for “Thin acrylic” system backdrop</li> <li>Added support for running AHK files as admin</li> <li>Added support for hiding the toolbar</li> <li>Opening the log location will now close the Settings Dialog when Files is the default file manager</li> <li>Fixed crash that would occur when two paths were entered from the command line</li> <li>Fixed crash that would occur when ungrouping from zoomed out view</li> <li>Fixed an issue where a resize cursor was incorrectly shown at titlebar edges when Files was maximized</li> <li>Fixed an issue where empty folders could not be compressed into an archive</li> <li>Fixed an issue where it didn’t work to switch between panes using a touch screen</li> <li>Fixed an issue where text on the Actions page wasn’t responsive on smaller screens</li> <li>Fixed an issue where the focus was changed when quickly switching between tabs</li> <li>Fixed an issue with launching programs from the Address Bar</li> <li>Fixed an issue where search results would stop loading after switching between tabs</li> <li>Fixed an issue where the Toolbar didn’t display properly in High Contrast</li> <li>Fixed an issue in Column View where the chevron didn’t support High Contrast</li> <li>Fixed an issue where the Files logo was displayed incorrectly in High Contrast</li> <li>Fixed an issue where the app could crash when changing the theme</li> <li>Fixed an issue where entering certain commands into the Address Bar would change the format</li> <li>Fixed an issue with Nutstore cloud drive detection</li> <li>Fixed an issue where certain keys couldn’t be mapped to Actions</li> <li>Fixed an issue where setting the desktop wallpaper didn’t work on multiple monitors</li> <li>Fixed an issue where changing icons didn’t work when admin access was required</li> <li>Fixed an issue with deleting items from zip files</li> <li>Fixed a potential crash when trying to locate the Libraries folder</li> <li>Fixed a potential crash when clicking items in the Quick Access widget</li> <li>Fixed a potential crash from occuring when deleting items</li>",ge,b,it="Conclusion",Ce,q,nt='As always, we appreciate your feedback and suggestions on how we improve Files. You can reach us through our GitHub issues page: <a href="https://github.com/files-community/Files/issues" rel="nofollow">https://github.com/files-community/Files/issues</a>.',ye,G,lt="Thank you for using Files! 😊",be,He,_e,N,ot='Download Files from our <a href="/download/">download page</a> | Sponsor us on <a href="https://github.com/sponsors/yaira2" rel="nofollow">GitHub</a>';return{c(){u=l("p"),u.innerHTML=Te,R=s(),H=l("p"),H.innerHTML=ke,B=s(),h=l("h2"),h.textContent=Le,V=s(),p=l("h3"),p.textContent=Me,Y=s(),_=l("p"),_.textContent=Pe,K=s(),F=l("figure"),F.innerHTML=Ae,Q=s(),T=l("p"),T.textContent=je,J=s(),k=l("figure"),k.innerHTML=ze,X=s(),c=l("h3"),c.textContent=De,Z=s(),L=l("p"),L.textContent=Ie,$=s(),M=l("figure"),M.innerHTML=Ue,ee=s(),f=l("h3"),f.textContent=We,te=s(),P=l("p"),P.textContent=Ee,ie=s(),A=l("figure"),A.innerHTML=Oe,ne=s(),v=l("h3"),v.textContent=Se,le=s(),j=l("p"),j.textContent=qe,oe=s(),z=l("figure"),z.innerHTML=Ge,se=s(),m=l("h3"),m.textContent=Ne,ae=s(),D=l("p"),D.textContent=Re,re=s(),w=l("h3"),w.textContent=Be,de=s(),I=l("p"),I.textContent=Ve,ue=s(),x=l("h3"),x.textContent=Ye,he=s(),U=l("p"),U.textContent=Ke,pe=s(),g=l("h3"),g.textContent=Qe,ce=s(),W=l("p"),W.innerHTML=Je,fe=s(),C=l("h3"),C.textContent=Xe,ve=s(),E=l("p"),E.textContent=Ze,me=s(),O=l("ul"),O.innerHTML=$e,we=s(),y=l("h2"),y.textContent=et,xe=s(),S=l("ul"),S.innerHTML=tt,ge=s(),b=l("h3"),b.textContent=it,Ce=s(),q=l("p"),q.innerHTML=nt,ye=s(),G=l("p"),G.textContent=lt,be=s(),He=l("hr"),_e=s(),N=l("p"),N.innerHTML=ot,this.h()},l(e){u=o(e,"P",{"data-svelte-h":!0}),a(u)!=="svelte-19d1m1t"&&(u.innerHTML=Te),R=r(e),H=o(e,"P",{"data-svelte-h":!0}),a(H)!=="svelte-5vziyt"&&(H.innerHTML=ke),B=r(e),h=o(e,"H2",{id:!0,"data-svelte-h":!0}),a(h)!=="svelte-11icoji"&&(h.textContent=Le),V=r(e),p=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(p)!=="svelte-bpv6wj"&&(p.textContent=Me),Y=r(e),_=o(e,"P",{"data-svelte-h":!0}),a(_)!=="svelte-1nerwyq"&&(_.textContent=Pe),K=r(e),F=o(e,"FIGURE",{"data-svelte-h":!0}),a(F)!=="svelte-1lt6omd"&&(F.innerHTML=Ae),Q=r(e),T=o(e,"P",{"data-svelte-h":!0}),a(T)!=="svelte-8z7cdj"&&(T.textContent=je),J=r(e),k=o(e,"FIGURE",{"data-svelte-h":!0}),a(k)!=="svelte-ots5o9"&&(k.innerHTML=ze),X=r(e),c=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(c)!=="svelte-164axnn"&&(c.textContent=De),Z=r(e),L=o(e,"P",{"data-svelte-h":!0}),a(L)!=="svelte-1k6hq4r"&&(L.textContent=Ie),$=r(e),M=o(e,"FIGURE",{"data-svelte-h":!0}),a(M)!=="svelte-15jw88i"&&(M.innerHTML=Ue),ee=r(e),f=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(f)!=="svelte-ti1hhe"&&(f.textContent=We),te=r(e),P=o(e,"P",{"data-svelte-h":!0}),a(P)!=="svelte-1spctl2"&&(P.textContent=Ee),ie=r(e),A=o(e,"FIGURE",{"data-svelte-h":!0}),a(A)!=="svelte-1xc2xf1"&&(A.innerHTML=Oe),ne=r(e),v=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(v)!=="svelte-m1u5o"&&(v.textContent=Se),le=r(e),j=o(e,"P",{"data-svelte-h":!0}),a(j)!=="svelte-1u24"&&(j.textContent=qe),oe=r(e),z=o(e,"FIGURE",{"data-svelte-h":!0}),a(z)!=="svelte-9ohjvt"&&(z.innerHTML=Ge),se=r(e),m=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(m)!=="svelte-97sx50"&&(m.textContent=Ne),ae=r(e),D=o(e,"P",{"data-svelte-h":!0}),a(D)!=="svelte-gpcxy9"&&(D.textContent=Re),re=r(e),w=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(w)!=="svelte-ykjtw7"&&(w.textContent=Be),de=r(e),I=o(e,"P",{"data-svelte-h":!0}),a(I)!=="svelte-11vuvcg"&&(I.textContent=Ve),ue=r(e),x=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(x)!=="svelte-140c0hx"&&(x.textContent=Ye),he=r(e),U=o(e,"P",{"data-svelte-h":!0}),a(U)!=="svelte-1uuhr86"&&(U.textContent=Ke),pe=r(e),g=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(g)!=="svelte-43xg0g"&&(g.textContent=Qe),ce=r(e),W=o(e,"P",{"data-svelte-h":!0}),a(W)!=="svelte-od1sec"&&(W.innerHTML=Je),fe=r(e),C=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(C)!=="svelte-8opsu7"&&(C.textContent=Xe),ve=r(e),E=o(e,"P",{"data-svelte-h":!0}),a(E)!=="svelte-1fosudt"&&(E.textContent=Ze),me=r(e),O=o(e,"UL",{"data-svelte-h":!0}),a(O)!=="svelte-4uvth4"&&(O.innerHTML=$e),we=r(e),y=o(e,"H2",{id:!0,"data-svelte-h":!0}),a(y)!=="svelte-zx5w86"&&(y.textContent=et),xe=r(e),S=o(e,"UL",{"data-svelte-h":!0}),a(S)!=="svelte-ywrbhr"&&(S.innerHTML=tt),ge=r(e),b=o(e,"H3",{id:!0,"data-svelte-h":!0}),a(b)!=="svelte-toxqw4"&&(b.textContent=it),Ce=r(e),q=o(e,"P",{"data-svelte-h":!0}),a(q)!=="svelte-1nk76uf"&&(q.innerHTML=nt),ye=r(e),G=o(e,"P",{"data-svelte-h":!0}),a(G)!=="svelte-1q4h339"&&(G.textContent=lt),be=r(e),He=o(e,"HR",{}),_e=r(e),N=o(e,"P",{"data-svelte-h":!0}),a(N)!=="svelte-1hrads6"&&(N.innerHTML=ot),this.h()},h(){d(h,"id","whats-new-in-v35"),d(p,"id","updated-the-design-with-rounded-corners"),d(c,"id","view-dimensions-when-hovering-over-images"),d(f,"id","open-batch-files-in-notepad-directly-from-the-toolbar"),d(v,"id","explore-network-locations-on-the-home-page"),d(m,"id","added-support-for-closing-the-left-pane-in-dual-pane-mode"),d(w,"id","onedrive-sync-status-indicator"),d(x,"id","view-duration-for-selected-video-files"),d(g,"id","new-localizations-added"),d(C,"id","improvements-to-crash-reporting-and-metrics"),d(y,"id","changes-and-improvements"),d(b,"id","conclusion")},m(e,t){i(e,u,t),i(e,R,t),i(e,H,t),i(e,B,t),i(e,h,t),i(e,V,t),i(e,p,t),i(e,Y,t),i(e,_,t),i(e,K,t),i(e,F,t),i(e,Q,t),i(e,T,t),i(e,J,t),i(e,k,t),i(e,X,t),i(e,c,t),i(e,Z,t),i(e,L,t),i(e,$,t),i(e,M,t),i(e,ee,t),i(e,f,t),i(e,te,t),i(e,P,t),i(e,ie,t),i(e,A,t),i(e,ne,t),i(e,v,t),i(e,le,t),i(e,j,t),i(e,oe,t),i(e,z,t),i(e,se,t),i(e,m,t),i(e,ae,t),i(e,D,t),i(e,re,t),i(e,w,t),i(e,de,t),i(e,I,t),i(e,ue,t),i(e,x,t),i(e,he,t),i(e,U,t),i(e,pe,t),i(e,g,t),i(e,ce,t),i(e,W,t),i(e,fe,t),i(e,C,t),i(e,ve,t),i(e,E,t),i(e,me,t),i(e,O,t),i(e,we,t),i(e,y,t),i(e,xe,t),i(e,S,t),i(e,ge,t),i(e,b,t),i(e,Ce,t),i(e,q,t),i(e,ye,t),i(e,G,t),i(e,be,t),i(e,He,t),i(e,_e,t),i(e,N,t)},p:Fe,i:Fe,o:Fe,d(e){e&&(n(u),n(R),n(H),n(B),n(h),n(V),n(p),n(Y),n(_),n(K),n(F),n(Q),n(T),n(J),n(k),n(X),n(c),n(Z),n(L),n($),n(M),n(ee),n(f),n(te),n(P),n(ie),n(A),n(ne),n(v),n(le),n(j),n(oe),n(z),n(se),n(m),n(ae),n(D),n(re),n(w),n(de),n(I),n(ue),n(x),n(he),n(U),n(pe),n(g),n(ce),n(W),n(fe),n(C),n(ve),n(E),n(me),n(O),n(we),n(y),n(xe),n(S),n(ge),n(b),n(Ce),n(q),n(ye),n(G),n(be),n(He),n(_e),n(N))}}}const ht={title:"Announcing Files v3.5",description:"Enjoy an updated design, network drive widget, enhanced dual-pane functionality, and improvements to crash analytics.",thumbnail:"/blog-resources/v3-5/Hero.png",date:"6/24/2024",author:"files-community"};class pt extends rt{constructor(u){super(),dt(this,u,null,ut,at,{})}}const vt=Object.freeze(Object.defineProperty({__proto__:null,default:pt,metadata:ht},Symbol.toStringTag,{value:"Module"}));export{pt as P,vt as _};
