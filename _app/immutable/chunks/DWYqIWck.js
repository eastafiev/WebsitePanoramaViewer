import{s as re,d as o,i as l,q as a,m as d,N as r,D as c,o as s,E as n,z as ce,A as se}from"./m8XikJfs.js";import{S as ne,i as ie,d as ae,t as ue,a as pe,m as he,c as me,b as fe}from"./CVWWWevV.js";/* empty css        */import{I as Ce}from"./CQ8dfP4K.js";function ye(Bt){let i;return{c(){i=se("Please note that a completely transparent window isn't available right now.")},l(u){i=ce(u,"Please note that a completely transparent window isn't available right now.")},m(u,N){l(u,i,N)},d(u){u&&o(i)}}}function xe(Bt){let i,u="The Appearance page in settings allows you to personalize your Files experience with a variety of aesthetic options. For those who love to tinker, we’ll even show you how to manually adjust the settings file for additional background colors and fonts.",N,p,_t="Theme customization",U,B,wt="Toggle effortlessly between dark and light mode to match your style or ambient lighting. The “Default” setting syncs with your Windows system theme, ensuring a cohesive visual experience.",G,_,Ht='<img src="/docs-resources/Dark-Light-Mode.png" alt="Light and dark mode split view"/>',J,h,Lt="Transparency effects",Q,m,Y,w,Mt="Choose your preferred backdrop material to add a layer of transparency to your window background. Opt for Mica Alt for a subtle effect (note: Mica requires Windows 11) or Acrylic for a frosted appearance. To fully appreciate these effects, ensure your background color is set to transparent.",R,f,Pt="Background color",X,H,Ft="Personalize the background color of your window from a spectrum of pre-selected shades. For a unique touch, use the color picker to input a custom color or adjust transparency to your liking.",Z,L,Et='<img src="/docs-resources/Settings-Appearance.png" alt="Settings dialog"/>',tt,C,St="Additional background colors",et,M,$t="While there isn’t an option in the settings UI, you can change the address bar, sidebar, and file area backgrounds by manually editing the settings file:",ot,P,qt="<li>Open Files &gt; Settings &gt; Advanced &gt; Edit settings file. This will open the settings file in your default text editor.</li> <li>Before editing the settings file, you’ll need to close Files by right-clicking the icon in the system tray and clicking on “Quit”.</li> <li>The settings file has a JSON format. You can use any text editor to open and modify it.</li> <li>Search for any of the keys listed below and edit the value as desired.</li>",lt,F,zt='<thead><tr><th>Key</th> <th>Default value</th></tr></thead> <tbody><tr><td><code>AppThemeBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr> <tr><td><code>AppThemeAddressBarBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr> <tr><td><code>AppThemeToolbarBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr> <tr><td><code>AppThemeSidebarBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr> <tr><td><code>AppThemeFileAreaBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr> <tr><td><code>AppThemeInfoBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr></tbody>',dt,y,It="Custom fonts",rt,E,jt="There isn’t an option in the settings UI but you can change the default font by manually editing the value for <code>AppThemeFontFamily</code> in the settings file.",ct,x,Ot="Popular themes",st,S,Dt="We put together some popular color combinations to help users create custom themes.",nt,v,Kt="Glass",it,$,Vt="The glass theme is best paired with the Acrylic backdrop material.",at,q,Wt='<thead><tr><th>Key</th> <th>Value</th></tr></thead> <tbody><tr><td><code>AppThemeBackgroundColor</code></td> <td><code class="color" style="--color:#00000000">#00000000</code></td></tr> <tr><td><code>AppThemeAddressBarBackgroundColor</code></td> <td><code class="color" style="--color:#00000001">#00000001</code></td></tr> <tr><td><code>AppThemeToolbarBackgroundColor</code></td> <td><code class="color" style="--color:#00000001">#00000001</code></td></tr> <tr><td><code>AppThemeSidebarBackgroundColor</code></td> <td><code class="color" style="--color:#00000001">#00000001</code></td></tr> <tr><td><code>AppThemeFileAreaBackgroundColor</code></td> <td><code class="color" style="--color:#00000001">#00000001</code></td></tr> <tr><td><code>AppThemeInfoPaneBackgroundColor</code></td> <td><code class="color" style="--color:#00000001">#00000001</code></td></tr></tbody>',ut,T,Nt="Finder",pt,z,Ut="The finder theme is based on the color scheme in Finder.",ht,I,Gt='<thead><tr><th>Key</th> <th>Value</th></tr></thead> <tbody><tr><td><code>AppThemeBackgroundColor</code></td> <td><code class="color" style="--color:#221d28">#221d28</code></td></tr> <tr><td><code>AppThemeAddressBarBackgroundColor</code></td> <td><code class="color" style="--color:#38343c">#38343c</code></td></tr> <tr><td><code>AppThemeToolbarBackgroundColor</code></td> <td><code class="color" style="--color:#38343c">#38343c</code></td></tr> <tr><td><code>AppThemeSidebarBackgroundColor</code></td> <td><code class="color" style="--color:#464449">#464449</code></td></tr> <tr><td><code>AppThemeFileAreaBackgroundColor</code></td> <td><code class="color" style="--color:#221d28">#221d28</code></td></tr> <tr><td><code>AppThemeInfoPaneBackgroundColor</code></td> <td><code class="color" style="--color:#38343c">#38343c</code></td></tr></tbody>',mt,b,Jt="Nord",ft,j,Qt='<thead><tr><th>Key</th> <th>Value</th></tr></thead> <tbody><tr><td><code>AppThemeBackgroundColor</code></td> <td><code class="color" style="--color:#FF1B1F26">#FF1B1F26</code></td></tr> <tr><td><code>AppThemeAddressBarBackgroundColor</code></td> <td><code class="color" style="--color:#2E3440">#2E3440</code></td></tr> <tr><td><code>AppThemeToolbarBackgroundColor</code></td> <td><code class="color" style="--color:#2E3440">#2E3440</code></td></tr> <tr><td><code>AppThemeSidebarBackgroundColor</code></td> <td><code class="color" style="--color:#2E3440">#2E3440</code></td></tr> <tr><td><code>AppThemeFileAreaBackgroundColor</code></td> <td><code class="color" style="--color:#2E3440">#2E3440</code></td></tr> <tr><td><code>AppThemeInfoPaneBackgroundColor</code></td> <td><code class="color" style="--color:#2E3440">#2E3440</code></td></tr></tbody>',Ct,g,Yt="Dracula",yt,O,Rt='<thead><tr><th>Key</th> <th>Value</th></tr></thead> <tbody><tr><td><code>AppThemeBackgroundColor</code></td> <td><code class="color" style="--color:#282A36">#282A36</code></td></tr> <tr><td><code>AppThemeAddressBarBackgroundColor</code></td> <td><code class="color" style="--color:#393d4e">#393d4e</code></td></tr> <tr><td><code>AppThemeToolbarBackgroundColor</code></td> <td><code class="color" style="--color:#282A36">#282A36</code></td></tr> <tr><td><code>AppThemeSidebarBackgroundColor</code></td> <td><code class="color" style="--color:#393d4e">#393d4e</code></td></tr> <tr><td><code>AppThemeFileAreaBackgroundColor</code></td> <td><code class="color" style="--color:#282A36">#282A36</code></td></tr> <tr><td><code>AppThemeInfoPaneBackgroundColor</code></td> <td><code class="color" style="--color:#282A36">#282A36</code></td></tr></tbody>',xt,k,Xt="Background image",vt,D,Zt="Files allows you to configure a custom background image or gif using the settings UI. Once selected, Files will update to display your image as a beautiful background, adding a distinctive touch to your workspace. Additionally, you can adjust the image’s opacity and display settings for a truly customized look.",Tt,K,te='<img src="/docs-resources/Background-Image.png" alt="Custom background image"/>',bt,A,ee="Setting a custom background image",gt,V,oe="<li>Open Files &gt; Settings &gt; Appearance, and scroll down to the “Background image” section.</li> <li>Click on “Browse” and select the image or gif you wish to use.</li>",kt,W,le='<img src="/docs-resources/Settings-Appearance-Background-Image.png" alt="Custom background image"/>',At;return m=new Ce({props:{severity:"information",$$slots:{default:[ye]},$$scope:{ctx:Bt}}}),{c(){i=s("p"),i.textContent=u,N=n(),p=s("h2"),p.textContent=_t,U=n(),B=s("p"),B.textContent=wt,G=n(),_=s("p"),_.innerHTML=Ht,J=n(),h=s("h2"),h.textContent=Lt,Q=n(),fe(m.$$.fragment),Y=n(),w=s("p"),w.textContent=Mt,R=n(),f=s("h2"),f.textContent=Pt,X=n(),H=s("p"),H.textContent=Ft,Z=n(),L=s("p"),L.innerHTML=Et,tt=n(),C=s("h3"),C.textContent=St,et=n(),M=s("p"),M.textContent=$t,ot=n(),P=s("ol"),P.innerHTML=qt,lt=n(),F=s("table"),F.innerHTML=zt,dt=n(),y=s("h2"),y.textContent=It,rt=n(),E=s("p"),E.innerHTML=jt,ct=n(),x=s("h2"),x.textContent=Ot,st=n(),S=s("p"),S.textContent=Dt,nt=n(),v=s("h3"),v.textContent=Kt,it=n(),$=s("p"),$.textContent=Vt,at=n(),q=s("table"),q.innerHTML=Wt,ut=n(),T=s("h3"),T.textContent=Nt,pt=n(),z=s("p"),z.textContent=Ut,ht=n(),I=s("table"),I.innerHTML=Gt,mt=n(),b=s("h3"),b.textContent=Jt,ft=n(),j=s("table"),j.innerHTML=Qt,Ct=n(),g=s("h3"),g.textContent=Yt,yt=n(),O=s("table"),O.innerHTML=Rt,xt=n(),k=s("h2"),k.textContent=Xt,vt=n(),D=s("p"),D.textContent=Zt,Tt=n(),K=s("p"),K.innerHTML=te,bt=n(),A=s("h3"),A.textContent=ee,gt=n(),V=s("ol"),V.innerHTML=oe,kt=n(),W=s("p"),W.innerHTML=le,this.h()},l(t){i=d(t,"P",{"data-svelte-h":!0}),r(i)!=="svelte-18et7x3"&&(i.textContent=u),N=c(t),p=d(t,"H2",{id:!0,"data-svelte-h":!0}),r(p)!=="svelte-1h10dd1"&&(p.textContent=_t),U=c(t),B=d(t,"P",{"data-svelte-h":!0}),r(B)!=="svelte-1hzn8w"&&(B.textContent=wt),G=c(t),_=d(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-sywfqs"&&(_.innerHTML=Ht),J=c(t),h=d(t,"H2",{id:!0,"data-svelte-h":!0}),r(h)!=="svelte-qzhcib"&&(h.textContent=Lt),Q=c(t),me(m.$$.fragment,t),Y=c(t),w=d(t,"P",{"data-svelte-h":!0}),r(w)!=="svelte-1dtlqjo"&&(w.textContent=Mt),R=c(t),f=d(t,"H2",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-19jcouf"&&(f.textContent=Pt),X=c(t),H=d(t,"P",{"data-svelte-h":!0}),r(H)!=="svelte-1ygghp3"&&(H.textContent=Ft),Z=c(t),L=d(t,"P",{"data-svelte-h":!0}),r(L)!=="svelte-ym64ql"&&(L.innerHTML=Et),tt=c(t),C=d(t,"H3",{id:!0,"data-svelte-h":!0}),r(C)!=="svelte-1r7fkpi"&&(C.textContent=St),et=c(t),M=d(t,"P",{"data-svelte-h":!0}),r(M)!=="svelte-j5we93"&&(M.textContent=$t),ot=c(t),P=d(t,"OL",{"data-svelte-h":!0}),r(P)!=="svelte-13ql8l1"&&(P.innerHTML=qt),lt=c(t),F=d(t,"TABLE",{"data-svelte-h":!0}),r(F)!=="svelte-9hjzv9"&&(F.innerHTML=zt),dt=c(t),y=d(t,"H2",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-440vsz"&&(y.textContent=It),rt=c(t),E=d(t,"P",{"data-svelte-h":!0}),r(E)!=="svelte-yd8zyx"&&(E.innerHTML=jt),ct=c(t),x=d(t,"H2",{id:!0,"data-svelte-h":!0}),r(x)!=="svelte-18bhk9t"&&(x.textContent=Ot),st=c(t),S=d(t,"P",{"data-svelte-h":!0}),r(S)!=="svelte-12q1ol8"&&(S.textContent=Dt),nt=c(t),v=d(t,"H3",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-1otzykg"&&(v.textContent=Kt),it=c(t),$=d(t,"P",{"data-svelte-h":!0}),r($)!=="svelte-ssbece"&&($.textContent=Vt),at=c(t),q=d(t,"TABLE",{"data-svelte-h":!0}),r(q)!=="svelte-jyfdsa"&&(q.innerHTML=Wt),ut=c(t),T=d(t,"H3",{id:!0,"data-svelte-h":!0}),r(T)!=="svelte-1cl7wck"&&(T.textContent=Nt),pt=c(t),z=d(t,"P",{"data-svelte-h":!0}),r(z)!=="svelte-1ujuyow"&&(z.textContent=Ut),ht=c(t),I=d(t,"TABLE",{"data-svelte-h":!0}),r(I)!=="svelte-18ridba"&&(I.innerHTML=Gt),mt=c(t),b=d(t,"H3",{id:!0,"data-svelte-h":!0}),r(b)!=="svelte-1pmem34"&&(b.textContent=Jt),ft=c(t),j=d(t,"TABLE",{"data-svelte-h":!0}),r(j)!=="svelte-1cijt6k"&&(j.innerHTML=Qt),Ct=c(t),g=d(t,"H3",{id:!0,"data-svelte-h":!0}),r(g)!=="svelte-1dgxlr8"&&(g.textContent=Yt),yt=c(t),O=d(t,"TABLE",{"data-svelte-h":!0}),r(O)!=="svelte-r2yutg"&&(O.innerHTML=Rt),xt=c(t),k=d(t,"H2",{id:!0,"data-svelte-h":!0}),r(k)!=="svelte-1x4ps53"&&(k.textContent=Xt),vt=c(t),D=d(t,"P",{"data-svelte-h":!0}),r(D)!=="svelte-qi8oa9"&&(D.textContent=Zt),Tt=c(t),K=d(t,"P",{"data-svelte-h":!0}),r(K)!=="svelte-1504s4q"&&(K.innerHTML=te),bt=c(t),A=d(t,"H3",{id:!0,"data-svelte-h":!0}),r(A)!=="svelte-ycvsyo"&&(A.textContent=ee),gt=c(t),V=d(t,"OL",{"data-svelte-h":!0}),r(V)!=="svelte-kivi0f"&&(V.innerHTML=oe),kt=c(t),W=d(t,"P",{"data-svelte-h":!0}),r(W)!=="svelte-vr93br"&&(W.innerHTML=le),this.h()},h(){a(p,"id","theme-customization"),a(h,"id","transparency-effects"),a(f,"id","background-color"),a(C,"id","additional-background-colors"),a(y,"id","custom-fonts"),a(x,"id","popular-themes"),a(v,"id","glass"),a(T,"id","finder"),a(b,"id","nord"),a(g,"id","dracula"),a(k,"id","background-image"),a(A,"id","setting-a-custom-background-image")},m(t,e){l(t,i,e),l(t,N,e),l(t,p,e),l(t,U,e),l(t,B,e),l(t,G,e),l(t,_,e),l(t,J,e),l(t,h,e),l(t,Q,e),he(m,t,e),l(t,Y,e),l(t,w,e),l(t,R,e),l(t,f,e),l(t,X,e),l(t,H,e),l(t,Z,e),l(t,L,e),l(t,tt,e),l(t,C,e),l(t,et,e),l(t,M,e),l(t,ot,e),l(t,P,e),l(t,lt,e),l(t,F,e),l(t,dt,e),l(t,y,e),l(t,rt,e),l(t,E,e),l(t,ct,e),l(t,x,e),l(t,st,e),l(t,S,e),l(t,nt,e),l(t,v,e),l(t,it,e),l(t,$,e),l(t,at,e),l(t,q,e),l(t,ut,e),l(t,T,e),l(t,pt,e),l(t,z,e),l(t,ht,e),l(t,I,e),l(t,mt,e),l(t,b,e),l(t,ft,e),l(t,j,e),l(t,Ct,e),l(t,g,e),l(t,yt,e),l(t,O,e),l(t,xt,e),l(t,k,e),l(t,vt,e),l(t,D,e),l(t,Tt,e),l(t,K,e),l(t,bt,e),l(t,A,e),l(t,gt,e),l(t,V,e),l(t,kt,e),l(t,W,e),At=!0},p(t,[e]){const de={};e&1&&(de.$$scope={dirty:e,ctx:t}),m.$set(de)},i(t){At||(pe(m.$$.fragment,t),At=!0)},o(t){ue(m.$$.fragment,t),At=!1},d(t){t&&(o(i),o(N),o(p),o(U),o(B),o(G),o(_),o(J),o(h),o(Q),o(Y),o(w),o(R),o(f),o(X),o(H),o(Z),o(L),o(tt),o(C),o(et),o(M),o(ot),o(P),o(lt),o(F),o(dt),o(y),o(rt),o(E),o(ct),o(x),o(st),o(S),o(nt),o(v),o(it),o($),o(at),o(q),o(ut),o(T),o(pt),o(z),o(ht),o(I),o(mt),o(b),o(ft),o(j),o(Ct),o(g),o(yt),o(O),o(xt),o(k),o(vt),o(D),o(Tt),o(K),o(bt),o(A),o(gt),o(V),o(kt),o(W)),ae(m,t)}}}const ve={title:"Appearance"},{title:Ae}=ve;class Be extends ne{constructor(i){super(),ie(this,i,null,xe,re,{})}}export{Be as P,ve as m};
