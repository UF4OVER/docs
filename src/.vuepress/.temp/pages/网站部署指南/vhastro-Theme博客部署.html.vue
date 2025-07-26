<template><div><div class="hint-container important">
<p class="hint-container-title">Frontmatter</p>
<p>使用Windows系统，使用Cloudflare进行部署分发，使用GitHub进行版本控制。</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#部署流程">部署流程</router-link><ul><li><router-link to="#_1-克隆仓库">1.克隆仓库</router-link></li><li><router-link to="#_2-本地预览">2.本地预览</router-link></li><li><router-link to="#_3-推送至github">3.推送至GitHub</router-link></li><li><router-link to="#_4-cloudflare配置">4.Cloudflare配置</router-link></li><li><router-link to="#_5-自定义域名">5.自定义域名</router-link></li><li><router-link to="#_6-怎么写博客">6.怎么写博客？</router-link></li></ul></li></ul></nav>
<h2 id="部署流程" tabindex="-1"><a class="header-anchor" href="#部署流程"><span>部署流程</span></a></h2>
<h3 id="_1-克隆仓库" tabindex="-1"><a class="header-anchor" href="#_1-克隆仓库"><span>1.克隆仓库</span></a></h3>
<p>找个空文件夹，并进入该文件夹，执行以下命令克隆仓库。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/uxiaohan/vhAstro-Theme.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p><strong>配置说明</strong><br>
修改前请参考：<a href="https://www.vvhan.com/article/astro-theme-vhastro-theme" target="_blank" rel="noopener noreferrer">vhAstro主题配置文档</a><br>
暂不执行 <code v-pre>npm install</code></p>
</blockquote>
<ul>
<li>克隆之后进入到<code v-pre>vhAstro-Theme\src\config.ts</code>,按照里面的注释将所有的配置都改为适合自己的需求。</li>
<li>不需要的配置为false，字符串的话就保持空字符串即可。</li>
<li>侧边个人网站不要要的话就注释掉。</li>
<li>删除掉<code v-pre>src\contenet\blog</code>中的所有文件，这样的话就不会有文章，当然你如果需要预览样式的话，也可以不删除</li>
<li>重要的最后一点:先删掉<code v-pre>package-lock.json</code>锁文件，在<code v-pre>package.json</code>中找到<code v-pre>overrides</code>，改为这样<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"overrides"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "yaml"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2.7.1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cosmiconfig"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"yaml"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2.7.1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cssnano"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"yaml"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2.7.1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "postcss-load-config"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"yaml"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2.7.1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>接着根目录创建 <code v-pre>.npmrc</code> 文件：<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-ini"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">shamefully-hoist</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">save-exact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-本地预览" tabindex="-1"><a class="header-anchor" href="#_2-本地预览"><span>2.本地预览</span></a></h3>
<p>接着</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后会输出类似的内容：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> vhastro@0.0.1 dev E:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">hAstro-Theme</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> rmdir /s /q .astro &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">astro</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">21:37:50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [types] Generated 1ms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">21:37:51</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [content] Syncing content</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">21:37:52</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [content] Synced content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> astro</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  v5.6.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ready</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2354</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ms</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">┃</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    http://localhost:4321/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">┃</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  http://192.168.1.4:4321/</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器随便访问一个网址，就会看到效果了。<br>
并且当你在修改后，浏览器会自动刷新。</p>
<h3 id="_3-推送至github" tabindex="-1"><a class="header-anchor" href="#_3-推送至github"><span>3.推送至GitHub</span></a></h3>
<p>新建一个公开的GitHub仓库，将项目完整的推送到该仓库。<br>
我使用的是PyCharm，右键项目根目录下，选择<code v-pre>Git</code>-&gt;管理远程-&gt;删除原来的远程仓库，并添加新建的远程仓库。<br>
<img src="https://zycs-img-c5u.pages.dev/v2/mh7b1Xp.png" alt="示例 =100×100" loading="lazy"></p>
<h3 id="_4-cloudflare配置" tabindex="-1"><a class="header-anchor" href="#_4-cloudflare配置"><span>4.Cloudflare配置</span></a></h3>
<ol>
<li>访问 <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare控制台</a></li>
<li>进入 <strong>Workers &amp; Pages</strong> → <strong>创建应用程序</strong> → <strong>Pages</strong><br>
<img src="https://zycs-img-c5u.pages.dev/v2/yHa2Xjy.png" alt="配置示意图" loading="lazy"></li>
<li>连接Git仓库并授权访问你刚刚新建的仓库。</li>
<li><strong>环境变量设置</strong></li>
</ol>
<table>
<thead>
<tr>
<th>键</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>NODE_VERSION</code></td>
<td><code v-pre>18.19.0</code></td>
</tr>
</tbody>
</table>
<p><strong>构建命令配置</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --force</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意选择框架预设<br>
<img src="https://zycs-img-c5u.pages.dev/v2/DYApz5Q.png" alt="构建界面" loading="lazy"></p>
<p>5.等待项目构建完成，完成之后cloudflare就会自动给你生成一个<code v-pre>*.pages.dev</code>的公网网址，访问该网址就可以看到你的博客了。</p>
<h3 id="_5-自定义域名" tabindex="-1"><a class="header-anchor" href="#_5-自定义域名"><span>5.自定义域名</span></a></h3>
<ol>
<li>进入 Pages 项目设置</li>
<li>选择 <strong>自定义域</strong></li>
<li>输入已有的域名并按指引配置DNS</li>
</ol>
<hr>
<h3 id="_6-怎么写博客" tabindex="-1"><a class="header-anchor" href="#_6-怎么写博客"><span>6.怎么写博客？</span></a></h3>
<p>按照图示创建一个任务(我不知道VC CODE怎么搞，请自行百度，但是JB全家桶应该都有)<br>
<img src="https://zycs-img-c5u.pages.dev/v2/fW9uvVz.png" alt="3c4c591f82c0a7f1fd9914e750cf7e46.png" loading="lazy"><br>
需要写博客的之后运行一下这个任务，就会自动生成md文件，写完之后push到GitHub，然后等待Cloudflare自动更新。</p>
</div></template>


