"use strict";(self.webpackChunkdemo_blog=self.webpackChunkdemo_blog||[]).push([[8974],{8436:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-28ac1b0c",path:"/feature/poster.html",title:"海报分享配置",lang:"zh-CN",frontmatter:{tag:["海报","poster"]},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"组件",slug:"组件",children:[]},{level:2,title:"文章推荐配置",slug:"文章推荐配置",children:[]}],git:{}}},7890:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var e=a(6252);const l=(0,e._)("h1",{id:"海报分享配置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#海报分享配置","aria-hidden":"true"},"#"),(0,e.Uk)(" 海报分享配置")],-1),t=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210911105738192",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20210911105738192.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),o=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210911105852609",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20210911105852609.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),p=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("主题默认在文章页面和心情页面加入了海报分享功能，你也可以在你想要的地方使用该组件，以注册为全局组件"),(0,e._)("code",null,"<Poster>")])],-1),c=(0,e._)("h2",{id:"配置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),(0,e.Uk)(" 配置")],-1),r=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"作者头像"),(0,e._)("p",null,[(0,e.Uk)("考虑到该海报分享，大家可能想要自定义，所以默认并没有使用站点的logo，如果没有在"),(0,e._)("code",null,"docs/readme.md"),(0,e.Uk)("中进行配置，并且请确保此头像连接允许跨域请求，如果出现跨域，在进行生成图片的时候，就会出问题，推荐将此图片放置在"),(0,e._)("code",null,"docs/.vuepress/public"),(0,e.Uk)("文件夹中，没有默认值")]),(0,e._)("p",null,"如果你运行出现下面错误，那很有可能就是你设置的头像连接不支持跨域"),(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e.Uk)("Access to image at "),(0,e._)("span",{class:"token string"},"'...'"),(0,e.Uk)(" from origin "),(0,e._)("span",{class:"token string"},"'http://localhost:8080'"),(0,e.Uk)(" has been blocked by "),(0,e._)("span",{class:"token constant"},"CORS"),(0,e.Uk)(),(0,e._)("span",{class:"token literal-property property"},"policy"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" No "),(0,e._)("span",{class:"token string"},"'Access-Control-Allow-Origin'"),(0,e.Uk)(" header is present on the requested resource"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])])]),(0,e._)("li",null,[(0,e._)("p",null,"作者"),(0,e._)("p",null,[(0,e.Uk)("默认值"),(0,e._)("code",null,"qsyyke")])]),(0,e._)("li",null,[(0,e._)("p",null,"博客描述"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210911115155380",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20210911115155380.png?x-oss-process=style/pictureProcess1",data:"aurora"})]),(0,e._)("p",null,"此项需要配置两个值，一个前缀，一个后缀")]),(0,e._)("li",null,[(0,e._)("p",null,"博客描述"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210911115301740",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20210911115301740.png?x-oss-process=style/pictureProcess1",data:"aurora"})])]),(0,e._)("li",null,[(0,e._)("p",null,"海报顶部背景"),(0,e._)("p",null,"默认使用的是bing首页的图片，暂时不支持自定义")])],-1),i=(0,e.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">poster</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t<span class="token comment">#博客描述</span>\n    <span class="token key atrule">description</span><span class="token punctuation">:</span> 初尘博客呀<span class="token punctuation">,</span>\n    <span class="token comment">#作者</span>\n    <span class="token key atrule">author</span><span class="token punctuation">:</span> <span class="token string">&#39;qsyyke&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">#博客前缀</span>\n    <span class="token key atrule">preBlog</span><span class="token punctuation">:</span> <span class="token string">&#39;chuchen&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">#博客后缀</span>\n    <span class="token key atrule">suffixBlog</span><span class="token punctuation">:</span> <span class="token string">&#39;blog&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">#头像</span>\n    <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /avatar.jpg\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>如果使用<code>Poster</code>组件，需要传入一些值</p><table><thead><tr><th>属性</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>海报标题</td></tr><tr><td>content</td><td>String</td><td>海报分享内容</td></tr></tbody></table><h2 id="文章推荐配置" tabindex="-1"><a class="header-anchor" href="#文章推荐配置" aria-hidden="true">#</a> 文章推荐配置</h2>',5),u=(0,e.Uk)("文章推荐配置"),d={},g=(0,a(3744).Z)(d,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,t,o,p,c,r,i,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/feature/recommend.html"},{default:(0,e.w5)((()=>[u])),_:1})])],64)}]])}}]);