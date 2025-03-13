import{s as U,h as o,C as a,U as z,j as n,M as u,D as r,k as I,V as N,d as l,q as k,i,x as b}from"./scheduler.DCUrRz8L.js";import{S as Y,i as B}from"./index.DLqkoM2M.js";function J(W){let s,D="1: Prerequisites",_,h,V=`<li><a href="https://visualstudio.microsoft.com/vs/" rel="nofollow">Visual Studio 2022</a> with the following individual components:
<ul><li>Windows 11 SDK (10.0.22621.0)</li> <li>.NET 9 SDK (version 9.0.200)</li> <li>MSVC v143 - VS 2022 C++ x64/x86 or ARM64 build tools (latest)</li> <li>C++ ATL for latest v143 build tools (x86 &amp; x64 or ARM64)</li> <li>Git for Windows</li></ul></li> <li><a href="https://learn.microsoft.com/windows/apps/windows-app-sdk/downloads#current-releases" rel="nofollow">Windows App SDK 1.6</a></li>`,w,p,j="2: Clone the Git repository",y,d,H,G='<code class="language-ps">git clone https://github.com/files-community/Files</code>',M,m,F="This will create a local copy of the repository.",S,c,q="3: Deploy the project in Visual Studio",T,f,A="To build the app in development mode, open the sln file in Visual Studio (Files.sln) and set the Files.Package project as the startup item by right-clicking on <code>Files.Package</code> in the solution explorer &amp; hitting ‘Set as Startup item’.",g,v,R="In the architecture pane, select the correct architecture for your system as <code>Debug</code> which should look like this:",P,x,E='<img src="/docs-resources/vs-architecture-config.png" alt="VS Run config: Debug, x64, Files.Package, Local Machine"/>',L,C,K="You’re good to go!";return{c(){s=o("h3"),s.textContent=D,_=a(),h=o("ul"),h.innerHTML=V,w=a(),p=o("h3"),p.textContent=j,y=a(),d=o("pre"),H=new z(!1),M=a(),m=o("p"),m.textContent=F,S=a(),c=o("h3"),c.textContent=q,T=a(),f=o("p"),f.innerHTML=A,g=a(),v=o("p"),v.innerHTML=R,P=a(),x=o("p"),x.innerHTML=E,L=a(),C=o("p"),C.textContent=K,this.h()},l(t){s=n(t,"H3",{id:!0,"data-svelte-h":!0}),u(s)!=="svelte-yxn44t"&&(s.textContent=D),_=r(t),h=n(t,"UL",{"data-svelte-h":!0}),u(h)!=="svelte-1040b3k"&&(h.innerHTML=V),w=r(t),p=n(t,"H3",{id:!0,"data-svelte-h":!0}),u(p)!=="svelte-z708wk"&&(p.textContent=j),y=r(t),d=n(t,"PRE",{class:!0});var e=I(d);H=N(e,!1),e.forEach(l),M=r(t),m=n(t,"P",{"data-svelte-h":!0}),u(m)!=="svelte-7gyah"&&(m.textContent=F),S=r(t),c=n(t,"H3",{id:!0,"data-svelte-h":!0}),u(c)!=="svelte-1hasd9i"&&(c.textContent=q),T=r(t),f=n(t,"P",{"data-svelte-h":!0}),u(f)!=="svelte-a1v8wc"&&(f.innerHTML=A),g=r(t),v=n(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-1s11jeo"&&(v.innerHTML=R),P=r(t),x=n(t,"P",{"data-svelte-h":!0}),u(x)!=="svelte-vsn89i"&&(x.innerHTML=E),L=r(t),C=n(t,"P",{"data-svelte-h":!0}),u(C)!=="svelte-f1era8"&&(C.textContent=K),this.h()},h(){k(s,"id","1-prerequisites"),k(p,"id","2-clone-the-git-repository"),H.a=null,k(d,"class","language-ps"),k(c,"id","3-deploy-the-project-in-visual-studio")},m(t,e){i(t,s,e),i(t,_,e),i(t,h,e),i(t,w,e),i(t,p,e),i(t,y,e),i(t,d,e),H.m(G,d),i(t,M,e),i(t,m,e),i(t,S,e),i(t,c,e),i(t,T,e),i(t,f,e),i(t,g,e),i(t,v,e),i(t,P,e),i(t,x,e),i(t,L,e),i(t,C,e)},p:b,i:b,o:b,d(t){t&&(l(s),l(_),l(h),l(w),l(p),l(y),l(d),l(M),l(m),l(S),l(c),l(T),l(f),l(g),l(v),l(P),l(x),l(L),l(C))}}}const X={title:"Compiling the source code"};class Z extends Y{constructor(s){super(),B(this,s,null,J,U,{})}}export{Z as P,X as m};
