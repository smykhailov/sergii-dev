"use strict";(self.webpackChunksergii_dev=self.webpackChunksergii_dev||[]).push([[7920],{5996:function(e,a,n){n.r(a),n.d(a,{Head:function(){return x},default:function(){return B}});var t=n(1151),s=n(7294);function r(e){const a=Object.assign({span:"span",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<style class=\"grvsc-styles\">\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-source:empty::after {\n    content: ' ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n  .default-light {\n    background-color: #FFFFFF;\n    color: #000000;\n  }\n  .default-light .grvsc-t7UkM5-1 { color: #000000; }\n  .default-light .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(0, 0, 0, 0.05));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(0, 0, 0, 0.2));\n  }\n  \n  /* Default Dark+ */\n  @media (prefers-color-scheme: dark) {\n    .grvsc-mm-tYvMB2 {\n      background-color: #1E1E1E;\n      color: #D4D4D4;\n    }\n    .grvsc-mm-tYvMB2 .grvsc-tYvMB2-1 { color: #D4D4D4; }\n    .grvsc-mm-tYvMB2 .grvsc-line-highlighted::before {\n      background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n      box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n    }\n  }\n  html[data-theme='light-plus'] .grvsc-ps-tiaGIi { background-color: #FDF6E3; }\n  html[data-theme='light-plus'] .grvsc-ps-tiaGIi .grvsc-tiaGIi-1 { color: #657B83; }\n  html[data-theme='light-plus'] .grvsc-ps-tiaGIi .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(0, 0, 0, 0.05));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(0, 0, 0, 0.2));\n  }\n  html[data-theme='dark-plus'] .grvsc-ps-tsSx3w {\n    background-color: #272822;\n    color: #f8f8f2;\n  }\n  html[data-theme='dark-plus'] .grvsc-ps-tsSx3w .grvsc-tsSx3w-1 { color: #F8F8F2; }\n  html[data-theme='dark-plus'] .grvsc-ps-tsSx3w .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n  }\n  html[data-theme='one-monokai'] .grvsc-ps-tuw09S {\n    background-color: #1e1e1e;\n    color: #c5c8c6;\n  }\n  html[data-theme='one-monokai'] .grvsc-ps-tuw09S .grvsc-tuw09S-1 { color: #C5C8C6FF; }\n  html[data-theme='one-monokai'] .grvsc-ps-tuw09S .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n  }\n  html[data-theme='high-contrast'] .grvsc-ps-t9aBUw {\n    color: #FFFFFF;\n    background-color: #000000;\n  }\n  html[data-theme='high-contrast'] .grvsc-ps-t9aBUw .grvsc-t9aBUw-1 { color: #FFFFFF; }\n  html[data-theme='high-contrast'] .grvsc-ps-t9aBUw .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n  }\n</style>"}}),"\n",s.createElement(a.p,null,"Developing JavaScript applications with just a browser sounds tempting, but it's not enough. You need some tools to boost your productivity and simplify your workflow. In this article, I will introduce the tools that you might find indispensable in your daily work."),"\n",s.createElement(a.p,null,"After setting up ",s.createElement(a.a,{href:"/articles/configure-windows-terminal"},"Windows Terminal")," and ",s.createElement(a.a,{href:"/articles/pscore-ohmyposh"},"PowerShell"),", you are ready to install other tools that will enhance your experience."),"\n",s.createElement(a.h2,{id:"nodejs"},"Node.js",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nodejs"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ab942af8964448d3ae1e9ac667414921/e224a/nodejs.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.49122807017544%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFAwT/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGxz0MwYYX/xAAbEAACAQUAAAAAAAAAAAAAAAABAhEAAxASE//aAAgBAQABBQJumxF4sJilx//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAICAwEAAAAAAAAAAAAAAAERACEgIjFR/9oACAEBAAY/AtSF5GFQl9w//8QAGxAAAQUBAQAAAAAAAAAAAAAAEQABECFBcTH/2gAIAQEAAT8hYd6P0iIz9VUyFxvsf//aAAwDAQACAAMAAAAQnA//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPxCn/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qp//EABwQAQEAAgIDAAAAAAAAAAAAAAERACEQcTGBof/aAAgBAQABPxDQIwBtY7vcwvvgA6uX38wgwAUEr1x4cX//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Node.js"\n        title=""\n        src="/static/ab942af8964448d3ae1e9ac667414921/e224a/nodejs.jpg"\n        srcset="/static/ab942af8964448d3ae1e9ac667414921/35265/nodejs.jpg 228w,\n/static/ab942af8964448d3ae1e9ac667414921/40acf/nodejs.jpg 455w,\n/static/ab942af8964448d3ae1e9ac667414921/e224a/nodejs.jpg 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"The first tool in your tool-belt should be ",s.createElement(a.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow"},"Node.js"),". It is a popular and powerful JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. In this section, I will give you an overview of what Node.js is, how it works, and why you should use it for your next web development project."),"\n",s.createElement(a.p,null,"Node.js is an open-source, cross-platform software that executes JavaScript code on a server. It was created in 2009 by Ryan Dahl, who was inspired by the event-driven and non-blocking I/O model of Google Chrome's V8 engine (in one of the future posts, I'll explain what V8 engine is and why it directories). Node.js uses the same V8 engine to run JavaScript code, but with some additional features and modules that make it suitable for server-side development or to execute different console tools, which are very useful to develop other applications."),"\n",s.createElement(a.p,null,"It has many advantages that make it a great choice for web development. Some of them are:"),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,"It is fast and scalable. Node.js can handle a large number of concurrent connections and requests with minimal overhead, thanks to its non-blocking I/O model and single-threaded architecture. It also supports clustering and load balancing to distribute the workload among multiple processes or machines."),"\n",s.createElement(a.li,null,"It is easy and fun to use. Node.js allows you to use JavaScript for both front-end and back-end development, which means you can use the same language and tools for the entire web stack. It also has a rich and vibrant ecosystem of modules and frameworks that you can use to build any kind of web application you can imagine."),"\n",s.createElement(a.li,null,"It is versatile and adaptable. Node.js can be used for a wide range of web applications, such as real-time communication, streaming media, data analysis, e-commerce, gaming, IoT, etc. It also supports various protocols and formats, such as HTTP, WebSocket, JSON, XML, etc."),"\n"),"\n",s.createElement(a.p,null,"You can download and install latest ",s.createElement(a.a,{href:"https://nodejs.org/en/download/",target:"_blank",rel:"nofollow"},"Node.js version")," from the official website. But I recommend to install it using ",s.createElement(a.a,{href:"#node-version-manager-nvm"},"nvm")," (Node Version Manager), which allows you to install and manage multiple Node.js versions on your machine."),"\n",s.createElement(a.h2,{id:"node-package-manager-npm"},"Node package manager (npm)",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#node-package-manager-npm"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/c33b29dfb96655f2ba7008bce7286f14/e224a/npm.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 42.54385964912281%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAME/9oADAMBAAIQAxAAAAG6LLU9WCdOH//EABsQAAEFAQEAAAAAAAAAAAAAAAEAAwQTMwIh/9oACAEBAAEFAhUXRWnfep2cfBf/xAAbEQACAQUAAAAAAAAAAAAAAAAAAQIEERIiQf/aAAgBAwEBPwFy1yFU24f/xAAXEQEAAwAAAAAAAAAAAAAAAAAAERIh/9oACAECAQE/AY1R/8QAHxAAAgECBwAAAAAAAAAAAAAAAQIAInEQERIxQZHh/9oACAEBAAY/AlGkZeQ0qduJSvQi3iWw/8QAHBABAQACAgMAAAAAAAAAAAAAEQEAISBRMWHB/9oACAEBAAE/IYEr6Hb7g27sAs9mQFKHinfAA//aAAwDAQACAAMAAAAQmD//xAAZEQADAQEBAAAAAAAAAAAAAAABESEAUbH/2gAIAQMBAT8QSNWJ8xQXrf/EABgRAAIDAAAAAAAAAAAAAAAAAAABETFB/9oACAECAQE/EFQOWn//xAAeEAACAQMFAAAAAAAAAAAAAAABEQAQIaFBYXGB8P/aAAgBAQABPxAJkJknqDJ4RwSQtVaPpGw2hABssKe3YzAU/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="npm"\n        title=""\n        src="/static/c33b29dfb96655f2ba7008bce7286f14/e224a/npm.jpg"\n        srcset="/static/c33b29dfb96655f2ba7008bce7286f14/35265/npm.jpg 228w,\n/static/c33b29dfb96655f2ba7008bce7286f14/40acf/npm.jpg 455w,\n/static/c33b29dfb96655f2ba7008bce7286f14/e224a/npm.jpg 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"npm is a popular tool for JavaScript development that allows you to publish and install packages from the public npm registry or a private npm registry. npm stands for Node Package Manager, and it is the default package manager for Node.js, a JavaScript runtime environment."),"\n",s.createElement(a.p,null,"npm has two main components: the npm command line interface (CLI) and the npm registry. The npm CLI is a program that you can use to interact with npm from your ",s.createElement(a.a,{href:"/articles/configure-windows-terminal"},"terminal"),". You can use it to create, publish, update, and delete packages, as well as to manage dependencies and run scripts. The ",s.createElement(a.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"nofollow"},"npm registry")," is a large database of JavaScript packages that you can access through the npm CLI or through a web browser."),"\n",s.createElement(a.p,null,"To use npm, you need to ",s.createElement(a.a,{href:"#nodejs"},"install Node.js")," and the npm CLI on your system. You can do this using either a ",s.createElement(a.a,{href:"#node-version-manager-nvm"},"Node version manager")," or a ",s.createElement(a.a,{href:"https://nodejs.org/en/download",target:"_blank",rel:"nofollow"},"Node installer"),"."),"\n",s.createElement(a.h2,{id:"node-version-manager-nvm"},"Node version manager (nvm)",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#node-version-manager-nvm"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/b445430bc3666e67cbdde5ebb90b839f/e224a/nvm.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 33.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAadCUgp//8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIDBBP/2gAIAQEAAQUCUXBr1ZqNomf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwGn/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIRABIhUf/aAAgBAQAGPwJTtaL3G1YjVaJ7kRiQRe5//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIVGR/9oACAEBAAE/IbANeny88FdKIEaEdBFQf//aAAwDAQACAAMAAAAQ/A//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPxCH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPxBNpwyhTFcLfIAFzAEXG+lE0msG2mm+XP/Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="nvm"\n        title=""\n        src="/static/b445430bc3666e67cbdde5ebb90b839f/e224a/nvm.jpg"\n        srcset="/static/b445430bc3666e67cbdde5ebb90b839f/35265/nvm.jpg 228w,\n/static/b445430bc3666e67cbdde5ebb90b839f/40acf/nvm.jpg 455w,\n/static/b445430bc3666e67cbdde5ebb90b839f/e224a/nvm.jpg 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"A Node version manager lets you install and switch between multiple versions of Node.js and npm, which is useful for testing your applications on different versions. A Node installer lets you install a specific version of Node.js and npm with a single program."),"\n",s.createElement(a.p,null,"Here you can find instructions how to install Node.js and npm using a Node version manager also called nvm. nvm is available for MacOS, Linux, and Windows systems. To install nvm, follow the instructions on its official website: ",s.createElement(a.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"nofollow"},"MacOS, Linux")," and ",s.createElement(a.a,{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"nofollow"},"Windows"),"."),"\n",s.createElement(a.p,null,"After installing nvm, you can use it to install any version of ",s.createElement(a.a,{href:"#nodejs"},"Node.js")," and ",s.createElement(a.a,{href:"#node-package-manager-npm"},"npm")," that you want. For example, to install the latest LTS (Long Term Support) version of Node.js and npm, run the following command:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container default-light grvsc-mm-tYvMB2 grvsc-ps-tiaGIi grvsc-ps-tsSx3w grvsc-ps-tuw09S grvsc-ps-t9aBUw" data-language="bash" data-index="0"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-t7UkM5-1 grvsc-tYvMB2-1 grvsc-tiaGIi-1 grvsc-tsSx3w-1 grvsc-tuw09S-1 grvsc-t9aBUw-1">nvm install --lts</span></span></span></code></pre>'}}),"\n",s.createElement(a.p,null,"To check the installed version of Node.js and npm, run the following commands:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container default-light grvsc-mm-tYvMB2 grvsc-ps-tiaGIi grvsc-ps-tsSx3w grvsc-ps-tuw09S grvsc-ps-t9aBUw" data-language="bash" data-index="1"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-t7UkM5-1 grvsc-tYvMB2-1 grvsc-tiaGIi-1 grvsc-tsSx3w-1 grvsc-tuw09S-1 grvsc-t9aBUw-1">node -v</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-t7UkM5-1 grvsc-tYvMB2-1 grvsc-tiaGIi-1 grvsc-tsSx3w-1 grvsc-tuw09S-1 grvsc-t9aBUw-1">npm -v</span></span></span></code></pre>'}}),"\n",s.createElement(a.p,null,"You can also use nvm to switch between different versions of Node.js and npm that you have installed. For example, to switch to version 14.18.2 of Node.js and npm, run the following command:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container default-light grvsc-mm-tYvMB2 grvsc-ps-tiaGIi grvsc-ps-tsSx3w grvsc-ps-tuw09S grvsc-ps-t9aBUw" data-language="bash" data-index="2"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-t7UkM5-1 grvsc-tYvMB2-1 grvsc-tiaGIi-1 grvsc-tsSx3w-1 grvsc-tuw09S-1 grvsc-t9aBUw-1">nvm use 14.18.2</span></span></span></code></pre>'}}),"\n",s.createElement(a.p,null,"To see all the versions of Node.js and npm that you have installed, run the following command:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container default-light grvsc-mm-tYvMB2 grvsc-ps-tiaGIi grvsc-ps-tsSx3w grvsc-ps-tuw09S grvsc-ps-t9aBUw" data-language="bash" data-index="3"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-t7UkM5-1 grvsc-tYvMB2-1 grvsc-tiaGIi-1 grvsc-tsSx3w-1 grvsc-tuw09S-1 grvsc-t9aBUw-1">nvm ls</span></span></span></code></pre>'}}),"\n",s.createElement(a.h2,{id:"git"},"Git",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4fcba3d642aefc57bd8eca7dd6c1b761/e224a/git.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 42.10526315789473%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHdEFLgp//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMSEyP/2gAIAQEAAQUC6bLHc2JmJ//EABYRAAMAAAAAAAAAAAAAAAAAAAIQQf/aAAgBAwEBPwE4v//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/ASf/xAAfEAAAAwkAAAAAAAAAAAAAAAAAAQIREiExQVFhYoH/2gAIAQEABj8C2oFIK0C4Da/PA//EABsQAAIDAAMAAAAAAAAAAAAAAAERADFBIVHR/9oACAEBAAE/IW17pS8hnimCByYHvzBYn//aAAwDAQACAAMAAAAQC+//xAAYEQACAwAAAAAAAAAAAAAAAAABEBExQf/aAAgBAwEBPxAppi//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EIap/8QAHBABAQACAgMAAAAAAAAAAAAAAREAITHwQVFx/9oACAEBAAE/EGceovTcb6RBjcjT3urPGCEtWpFBDfHzP//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="git"\n        title=""\n        src="/static/4fcba3d642aefc57bd8eca7dd6c1b761/e224a/git.jpg"\n        srcset="/static/4fcba3d642aefc57bd8eca7dd6c1b761/35265/git.jpg 228w,\n/static/4fcba3d642aefc57bd8eca7dd6c1b761/40acf/git.jpg 455w,\n/static/4fcba3d642aefc57bd8eca7dd6c1b761/e224a/git.jpg 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"Git is a popular version control system that allows you to track changes in your code and collaborate with other developers. It is widely used in software development and open source projects."),"\n",s.createElement(a.p,null,"Git is based on the concept of a repository, which is a collection of files and folders that are associated with a project. A repository can have multiple branches, which are different versions of the project that can be created, modified, and merged. Each branch has a series of commits, which are snapshots of the project at a certain point in time. You can use git commands to create, switch, merge, and delete branches, as well as to add, edit, delete, and revert files."),"\n",s.createElement(a.p,null,"To install git on your computer, you need to download ans install the appropriate package for your operating system from the ",s.createElement(a.a,{href:"https://git-scm.com/downloads",target:"_blank",rel:"nofollow"},"official website"),". To verify that git is installed correctly, open a terminal or command prompt and type:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container default-light grvsc-mm-tYvMB2 grvsc-ps-tiaGIi grvsc-ps-tsSx3w grvsc-ps-tuw09S grvsc-ps-t9aBUw" data-language="bash" data-index="4"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-t7UkM5-1 grvsc-tYvMB2-1 grvsc-tiaGIi-1 grvsc-tsSx3w-1 grvsc-tuw09S-1 grvsc-t9aBUw-1">git --version</span></span></span></code></pre>'}}),"\n",s.createElement(a.p,null,"This should display the version number of git that you have installed."),"\n",s.createElement(a.p,null,"Once you have installed git, you can start using it to create and manage your own repositories. You can also use git to clone existing repositories from remote sources, such as ",s.createElement(a.a,{href:"https://github.com/",target:"_blank",rel:"nofollow"},"GitHub")," or ",s.createElement(a.a,{href:"https://bitbucket.org/",target:"_blank",rel:"nofollow"},"Bitbucket"),". To learn more about git and its features, visit the ",s.createElement(a.a,{href:"https://git-scm.com/doc",target:"_blank",rel:"nofollow"},"official documentation")," or some ",s.createElement(a.a,{href:"https://www.atlassian.com/git/tutorials",target:"_blank",rel:"nofollow"},"online tutorials"),"."),"\n",s.createElement(a.h2,{id:"ides"},"IDEs",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ides"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.p,null,"If you are a web developer, you probably know how important it is to have a good integrated development environment (IDE) for your projects. An IDE is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of a source code editor, a compiler or interpreter, a debugger, and other tools for code completion, syntax highlighting, refactoring, and testing."),"\n",s.createElement(a.p,null,"There are many IDEs available for web development, each with its own features and advantages. Here is the list of the most popular ones. These are just some of the IDEs that you can use for web development. Depending on your preferences and needs, you may find one of them more suitable for your projects. However, you can also try out different IDEs and see which one works best for you. My personal favorite is Visual Studio Code."),"\n",s.createElement(a.h3,{id:"visual-studio-code"},"Visual Studio Code",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#visual-studio-code"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 910px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4647c9f91c90d18eb049e6a0618b1cf0/a0a10/vscode.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 77.19298245614036%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADIElEQVR42jVTXWvkNhT1f2ihhW3GM7ZsWZJlSbZs+WM84yQzyYYMbUlZsh+BhYW+7P9/M/gUa9KHwxVIOpxz77nBcLidm6aBc+3iXIu6rqG1gbU1rLXo+xZtu8Kh7zs451Aajbqp4ZoGSimPum78v8C5Zi6UQd+Py0psjPEPjCkhuABNEzBGwTmDVgVUUUAwdn2nSzCeg2YMjHEkaYKgLKv59uGMy+W8tG3vlRWFQtu1MKXCbhdhu91iuw2RUoKMJch4CsoSJIwiySgiEiMiEfJCIrC2nqfDgIf749J2g7dXmgqudyidQRwTRFGEjHMUVYnCluiOI6rOQVYKUguQNEFCU4hcImjbZjbVAbU9LOO4R1VZSFl4QtuWXt1K6roRfT9ASgUhJPK88NVbTVLEcQJTlgjGcT8/ffwbjw+X5dpgDSFy1K6Gtgq7KEIcEXTNgLu7W0zHCcMw4DCOfmiUUhBCQGICxhiCXJv5x+WIL+dxMbUD5xycC9jGesLVbhSnaKYLjo9/QtgRrByQmR6JbBDLBqlyIEWLMOEIhDbzv88D3k7d4vZHH4U8l57QNNpbjiKC2h0wjBNs06OqW1h3rZRLxCkDoRxRnCAopJrPfz3gn5fT4lyPNTprn6y7KtztdiAkgWsHn0OWZeCMQ+Y5Mpp5qwlJPOI4RsAKPX8fLN6O/dKORx/cQio/lLqrrkNJMnBVw5QGtq5gygoRWaOTI4pjbDYbbDYhwu0WQaH1fKgsJtct3TBcCQuFqq7eFUaICfEt2E+3OJw+Qq2E0e6daIObmxuP9RyURs9UWyi3X/aesIXgOXSloaxEtm4BZ8hoipRmkGvo285vkxDC2/wfq5tAKzMLV8H0bmlqB5EXYCwHlzlkWSBe+5NSXynNIPIchdJ+3bjI/d0m3CIMt9iEIYJSinmaWkzHbpGMQlAClkSwZQ6tU6RRCCMZWLIDJVuIjCBnCbRkKJXAh99+wR+//4oP7wiGy/f5/OUnHr/+XNzTG4q7V8jpE6qnb6guX8EPL1D3r9Cnzx7V+TPM6RXm/hPqx2+Qxxek7TP4cAHtnvEfr0jVQTSHiLUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="VS Code"\n        title=""\n        src="/static/4647c9f91c90d18eb049e6a0618b1cf0/9d517/vscode.png"\n        srcset="/static/4647c9f91c90d18eb049e6a0618b1cf0/b37ba/vscode.png 228w,\n/static/4647c9f91c90d18eb049e6a0618b1cf0/c27a4/vscode.png 455w,\n/static/4647c9f91c90d18eb049e6a0618b1cf0/9d517/vscode.png 910w,\n/static/4647c9f91c90d18eb049e6a0618b1cf0/a0a10/vscode.png 1281w"\n        sizes="(max-width: 910px) 100vw, 910px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,s.createElement(a.a,{href:"https://code.visualstudio.com/",target:"_blank",rel:"nofollow"},"Visual Studio Code")," (VS Code) is a free and open-source IDE developed by Microsoft. It supports a wide range of programming languages, frameworks, and technologies for web development, such as HTML, CSS, JavaScript, TypeScript, React, Angular, Vue, Node.js, PHP, Python, Ruby, and more. VS Code has a rich set of extensions that enhance its functionality and provide features such as code completion, syntax highlighting, debugging, testing, formatting, refactoring, and more. VS Code also has a built-in terminal, a source control integration, and a live server that allows you to preview your web pages in real time."),"\n",s.createElement(a.h3,{id:"webstorm"},"WebStorm",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#webstorm"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 910px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d47a0f9eaff6f5ffa3f7282725b76dc1/548e7/webstorm.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 58.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAwCdASoUAAwAPtFUo0uoJKMhsAgBABoJaQAAVMETSR9o2BawAP7L/jFO/yROuWlZIvtjx8PHdrohJnfoUAAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="WebStorm"\n        title=""\n        src="/static/d47a0f9eaff6f5ffa3f7282725b76dc1/adb50/webstorm.webp"\n        srcset="/static/d47a0f9eaff6f5ffa3f7282725b76dc1/b8c73/webstorm.webp 228w,\n/static/d47a0f9eaff6f5ffa3f7282725b76dc1/e2468/webstorm.webp 455w,\n/static/d47a0f9eaff6f5ffa3f7282725b76dc1/adb50/webstorm.webp 910w,\n/static/d47a0f9eaff6f5ffa3f7282725b76dc1/b40ad/webstorm.webp 1365w,\n/static/d47a0f9eaff6f5ffa3f7282725b76dc1/287e6/webstorm.webp 1820w,\n/static/d47a0f9eaff6f5ffa3f7282725b76dc1/548e7/webstorm.webp 2400w"\n        sizes="(max-width: 910px) 100vw, 910px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,s.createElement(a.a,{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"nofollow"},"WebStorm")," is commercial but powerful and professional IDE developed by JetBrains. It is designed specifically for web development and supports many languages and frameworks such as JavaScript, TypeScript, HTML, CSS, React, Angular, Vue, Node.js, Express, Meteor, Django, Laravel, WordPress, and more. WebStorm has many advanced features that help you write high-quality code and boost your productivity. Some of these features are code analysis, code completion, refactoring, debugging, testing, code formatting, code generation, live editing, and more. WebStorm also integrates with many tools and services such as Git, GitHub, npm, Yarn, webpack, ESLint, Prettier, Jest, Mocha, Karma, and more."),"\n",s.createElement(a.h3,{id:"sublime-text"},"Sublime Text",s.createElement(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sublime-text"},s.createElement(a.span,{className:"icon icon-link"}))),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 910px; margin-left: 0;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ad531717bfa81b120a40634fe73a8135/6c357/sublime-text.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50.43859649122807%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAACA0lEQVR42j2S247aMBBA+ZGq0u6WhV0ugQRytxMb5x4CLKu2qlSp//8Rp7Kp+jCa0cg6Pp7xTAjJPjjyPF+w2uwQqiZMCvww45hIDrHACxKSXFPohryskKp2tSgrhK5dtj1lOmYbP2TlBXx5mvO28SmqC23/k+n7H7rpF+Z8p7p9orsbZvgkVQN1/4P+4zdFfUEOE/GpJ5QtRXNl9vq+JQhTnl/fWaw9wrziZK404yemu1G2F2Q7Ieoz0pyJyx4pOrS5oOoJP9V4cYGfaXI9MHuavzmgzYuVRyRqSjOhqwF1qkjLhkNWPwyqM35eUcaaobqQNnf2Wc02LFyEoma2WO8J04KtH7HeHR1QmglR3dyBINUurLk4DfipIZYNqT5zLDq8SP0HelHB7GW55hDnzm5p4bKhFA1DdcYMdyJ15pCZf8CRIDUkeiBvbhT1lSCr2cclOxeK2dfnV3aHmOXac1BrJVTvlpOdJtKyI8gMx9y4Gdo6SDSF6lDVSFwODriPlbN1S/GPCfPlmvn79mFSXVD994eRBdgZ2ovMyCGv2EUl0thl3cn0SFL2HETt+g4YpZKXxYqXxdqZJGrA9B+0/ZXMXMhPHdlppKgn9/xNWBDrEdl+OJi120YlngV+szOMHt/GAiP5sMmKFqlHUj3iJ4JjpoiL1hnarxLJxoWtHwt5zPEvVPRXxEQ7r7MAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Sublime Text"\n        title=""\n        src="/static/ad531717bfa81b120a40634fe73a8135/9d517/sublime-text.png"\n        srcset="/static/ad531717bfa81b120a40634fe73a8135/b37ba/sublime-text.png 228w,\n/static/ad531717bfa81b120a40634fe73a8135/c27a4/sublime-text.png 455w,\n/static/ad531717bfa81b120a40634fe73a8135/9d517/sublime-text.png 910w,\n/static/ad531717bfa81b120a40634fe73a8135/c2ad0/sublime-text.png 1365w,\n/static/ad531717bfa81b120a40634fe73a8135/6c357/sublime-text.png 1499w"\n        sizes="(max-width: 910px) 100vw, 910px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,s.createElement(a.a,{href:"https://www.sublimetext.com/",target:"_blank",rel:"nofollow"},"Sublime Text")," is a across-platform text editor that can be used as an IDE with the help of plugins. It is known for its speed, simplicity, and elegance. It supports many languages and frameworks for web development. It has features such as multiple cursors, split editing, distraction-free mode, and a powerful command palette."))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?s.createElement(a,e,s.createElement(r,e)):r(e)},A=n(4316),i=n(4854),l=n(8032),c=n(8187),d=n(9683),g=n(624),p=n(834),m=n(1304),h=n.n(m),u=n(4001),b=n(1009),f=n(917);const v=e=>{var a,n,t,r,o,A;const{frontmatter:c,excerpt:m}=e.data.mdx,{0:u,1:v}=(0,s.useState)(!1),B="undefined"!=typeof window?window.location.href:"",x=null!=c&&c.featuredImage?(0,l.c)(c.featuredImage):void 0;return(0,f.tZ)(d.Z,{title:null==c?void 0:c.title,displayShadow:u},(0,f.tZ)(w,{onScroll:e=>v(e.target.scrollTop>0)},(0,f.tZ)("header",null,(0,f.tZ)(E,null,(0,f.tZ)("h1",null,null==c?void 0:c.title),(0,f.tZ)(b.Z,{url:B,title:null==c?void 0:c.title,description:m})),(0,f.tZ)(y,null,(0,f.tZ)("p",null,"Posted on ",(0,f.tZ)("strong",null,(0,p.p)(null==c?void 0:c.date))," -"," ",null===(a=e.data.mdx)||void 0===a||null===(n=a.fields)||void 0===n||null===(t=n.readingTime)||void 0===t?void 0:t.text),(0,f.tZ)("p",null,null==c||null===(r=c.tags)||void 0===r?void 0:r.map((e=>(0,f.tZ)(i.Link,{key:e,to:"/tags/"+h()(e).toLocaleLowerCase()},"#"+e)))))),x&&(0,f.tZ)(l.G,{image:x,alt:(null==c?void 0:c.title)||""}),(0,f.tZ)("main",null,e.children),(0,f.tZ)(g.Z,{slug:null===(o=e.data.mdx)||void 0===o||null===(A=o.fields)||void 0===A?void 0:A.slug,title:null==c?void 0:c.title})))};v.Aside=c.Z;const w=(0,A.Z)("div",{target:"e1p5hyc92"})({name:"1pleiih",styles:"padding:18px;flex:1 1 auto;max-height:calc(100vh - 61px);overflow:auto"}),E=(0,A.Z)("div",{target:"e1p5hyc91"})({name:"1yu1s9y",styles:"display:flex;justify-content:space-between;align-items:end;& .post-meta-share-icons{margin-bottom:0.3332rem;line-height:2;}& button{margin-left:0.5rem;}"}),y=(0,A.Z)("div",{target:"e1p5hyc90"})({name:"112el0a",styles:"display:flex;justify-content:space-between;align-items:end;& p{display:flex;flex-wrap:wrap;flex-basis:fit-content;align-self:flex-start;white-space:nowrap;}& p:first-of-type{display:inline-block;white-space:nowrap;}& * > a{margin-left:12px;opacity:0.85;}& * > a:hover{opacity:1;cursor:pointer;}"});function B(e){return s.createElement(v,e,s.createElement(o,e))}const x=e=>{var a,n;const t=null===(a=e.data.site)||void 0===a?void 0:a.siteMetadata,{frontmatter:s,excerpt:r}=e.data.mdx;return(0,f.tZ)(u.Z,{title:null==s?void 0:s.title,author:t.author,description:r,keywords:(null==s||null===(n=s.keywords)||void 0===n?void 0:n.map((e=>e)).join(", "))||""})}}}]);
//# sourceMappingURL=component---src-components-article-tsx-content-file-path-home-runner-work-sergii-dev-sergii-dev-articles-2023-05-26-web-dev-tools-mdx-1a77c9f81199b5cb9e82.js.map