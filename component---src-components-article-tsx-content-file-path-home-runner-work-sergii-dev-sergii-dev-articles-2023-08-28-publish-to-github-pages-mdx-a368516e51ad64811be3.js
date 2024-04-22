"use strict";(self.webpackChunksergii_dev=self.webpackChunksergii_dev||[]).push([[5545],{5533:function(e,A,t){t.r(A),t.d(A,{Head:function(){return j},default:function(){return B}});var n=t(1151),a=t(7294);function s(e){const A=Object.assign({span:"span",p:"p",a:"a",code:"code"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(A.span,{dangerouslySetInnerHTML:{__html:"<style class=\"grvsc-styles\">\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-source:empty::after {\n    content: ' ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n</style>"}}),"\n",a.createElement(A.p,null,"In this blog post, I will show you how to deploy your site to ",a.createElement(A.a,{href:"https://docs.github.com/en/pages",target:"_blank",rel:"nofollow"},"GitHub Pages"),"\nfrom the branch."),"\n",a.createElement(A.p,null,"GitHub Pages is a service that lets you host your static website for free using GitHub.\nYou can use any branch in your repository as the source for your site, which gives you more flexibility\nand control over your deployment process."),"\n",a.createElement(A.p,null,"As I don't use any framework, I don't need to create a special branch for GitHub Pages.\nI can use the ",a.createElement(A.code,null,"master")," branch as the source for this project. For this project it is enough\nto use ",a.createElement(A.a,{href:"https://github.com/smykhailov/the-businessman/settings/pages",target:"_blank",rel:"nofollow"},"GitHub Settings")," to publish the site."),"\n",a.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 910px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/06d9474b24a00175125179a1baad4c08/a9282/github-pages.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 77.63157894736842%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3aBR/8QAFhAAAwAAAAAAAAAAAAAAAAAAEBEg/9oACAEBAAEFAgo//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAECFR/9oACAEBAAE/IcApORMIxV//2gAMAwEAAgADAAAAENPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAAEDBQAAAAAAAAAAAAAAAQAQESExQXGRsf/aAAgBAQABPxBsXBAHJ5FcoeSW7JAhq90//9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="GitHub Pages"\n        title=""\n        src="/static/06d9474b24a00175125179a1baad4c08/09605/github-pages.jpg"\n        srcset="/static/06d9474b24a00175125179a1baad4c08/35265/github-pages.jpg 228w,\n/static/06d9474b24a00175125179a1baad4c08/40acf/github-pages.jpg 455w,\n/static/06d9474b24a00175125179a1baad4c08/09605/github-pages.jpg 910w,\n/static/06d9474b24a00175125179a1baad4c08/d2835/github-pages.jpg 1365w,\n/static/06d9474b24a00175125179a1baad4c08/a9282/github-pages.jpg 1503w"\n        sizes="(max-width: 910px) 100vw, 910px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(A.p,null,"Just select the ",a.createElement(A.code,null,"master")," branch and click on the ",a.createElement(A.code,null,"Save"),' button. It is as easy as that.\nYou will see a message that says "Your site is ready to be published at https://username.github.io/reponame/"\nwhere username is your GitHub username and reponame is your repository name.'),"\n",a.createElement(A.p,null,"In my case it is located on ",a.createElement(A.a,{href:"https://smykhailov.github.io/the-businessman/",target:"_blank",rel:"nofollow"},"The Businssman")," repository page.\nFor now, it is empty, but it will be updated as soon as I push the changes to the ",a.createElement(A.code,null,"master")," branch. But as I referenced\nJavaScript file which writes to console, we can open browser Dev Tools and see that message in the console."),"\n",a.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 910px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4594231c3fa871a814f590802382e5ef/e4c1e/the-site.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 24.12280701754386%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB34AH/8QAFhAAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEBAAEFAlD/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAWEAEBAQAAAAAAAAAAAAAAAAAAESH/2gAIAQEAAT8hTUP/2gAMAwEAAgADAAAAEPPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERUZH/2gAIAQEAAT8QixENm70tvT//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="The Businessman Empty Site"\n        title=""\n        src="/static/4594231c3fa871a814f590802382e5ef/09605/the-site.jpg"\n        srcset="/static/4594231c3fa871a814f590802382e5ef/35265/the-site.jpg 228w,\n/static/4594231c3fa871a814f590802382e5ef/40acf/the-site.jpg 455w,\n/static/4594231c3fa871a814f590802382e5ef/09605/the-site.jpg 910w,\n/static/4594231c3fa871a814f590802382e5ef/e4c1e/the-site.jpg 1278w"\n        sizes="(max-width: 910px) 100vw, 910px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(A.p,null,"Behind the scene GitHub Pages uses ",a.createElement(A.a,{href:"https://jekyllrb.com/",target:"_blank",rel:"nofollow"},"Jekyll")," to build your site. And creates ",a.createElement(A.a,{href:"https://github.com/smykhailov/the-businessman/actions/workflows/pages/pages-build-deployment",target:"_blank",rel:"nofollow"},"GitHub Actions workflow"),",\nwhich executes everytime the change is pushed to the ",a.createElement(A.code,null,"master")," branch."),"\n",a.createElement(A.p,null,"In the next artecle I will create the main screen for our game."))}var i=function(e){void 0===e&&(e={});const{wrapper:A}=Object.assign({},(0,n.ah)(),e.components);return A?a.createElement(A,e,a.createElement(s,e)):s(e)},l=t(4316),r=t(4854),o=t(8032),c=t(8187),g=t(9683),d=t(624),p=t(834),u=t(1304),h=t.n(u),m=t(4001),b=t(1009),f=t(917);const v=e=>{var A,t,n,s,i,l;const{frontmatter:c,excerpt:u}=e.data.mdx,{0:m,1:v}=(0,a.useState)(!1),B="undefined"!=typeof window?window.location.href:"",j=null!=c&&c.featuredImage?(0,o.c)(c.featuredImage):void 0;return(0,f.tZ)(g.Z,{title:null==c?void 0:c.title,displayShadow:m},(0,f.tZ)(E,{onScroll:e=>v(e.target.scrollTop>0)},(0,f.tZ)("header",null,(0,f.tZ)(y,null,(0,f.tZ)("h1",null,null==c?void 0:c.title),(0,f.tZ)(b.Z,{url:B,title:null==c?void 0:c.title,description:u})),(0,f.tZ)(w,null,(0,f.tZ)("p",null,"Posted on ",(0,f.tZ)("strong",null,(0,p.p)(null==c?void 0:c.date))," -"," ",null===(A=e.data.mdx)||void 0===A||null===(t=A.fields)||void 0===t||null===(n=t.readingTime)||void 0===n?void 0:n.text),(0,f.tZ)("p",null,null==c||null===(s=c.tags)||void 0===s?void 0:s.map((e=>(0,f.tZ)(r.Link,{key:e,to:"/tags/"+h()(e).toLocaleLowerCase()},"#"+e)))))),j&&(0,f.tZ)(o.G,{image:j,alt:(null==c?void 0:c.title)||""}),(0,f.tZ)("main",null,e.children),(0,f.tZ)(d.Z,{slug:null===(i=e.data.mdx)||void 0===i||null===(l=i.fields)||void 0===l?void 0:l.slug,title:null==c?void 0:c.title})))};v.Aside=c.Z;const E=(0,l.Z)("div",{target:"e1p5hyc92"})({name:"1pleiih",styles:"padding:18px;flex:1 1 auto;max-height:calc(100vh - 61px);overflow:auto"}),y=(0,l.Z)("div",{target:"e1p5hyc91"})({name:"1yu1s9y",styles:"display:flex;justify-content:space-between;align-items:end;& .post-meta-share-icons{margin-bottom:0.3332rem;line-height:2;}& button{margin-left:0.5rem;}"}),w=(0,l.Z)("div",{target:"e1p5hyc90"})({name:"112el0a",styles:"display:flex;justify-content:space-between;align-items:end;& p{display:flex;flex-wrap:wrap;flex-basis:fit-content;align-self:flex-start;white-space:nowrap;}& p:first-of-type{display:inline-block;white-space:nowrap;}& * > a{margin-left:12px;opacity:0.85;}& * > a:hover{opacity:1;cursor:pointer;}"});function B(e){return a.createElement(v,e,a.createElement(i,e))}const j=e=>{var A,t;const n=null===(A=e.data.site)||void 0===A?void 0:A.siteMetadata,{frontmatter:a,excerpt:s}=e.data.mdx;return(0,f.tZ)(m.Z,{title:null==a?void 0:a.title,author:n.author,description:s,keywords:(null==a||null===(t=a.keywords)||void 0===t?void 0:t.map((e=>e)).join(", "))||""})}}}]);
//# sourceMappingURL=component---src-components-article-tsx-content-file-path-home-runner-work-sergii-dev-sergii-dev-articles-2023-08-28-publish-to-github-pages-mdx-a368516e51ad64811be3.js.map