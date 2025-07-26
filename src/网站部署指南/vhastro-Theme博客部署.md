---
title: Cloudflare一键部署博客
icon: fa6-brands:markdown
order: 2
category:
  - 博客
tag:
  - Cloudflare
---

::: important Frontmatter
使用Windows系统，使用Cloudflare进行部署分发，使用GitHub进行版本控制。
:::

[[TOC]]

## 部署流程

### 1.克隆仓库
找个空文件夹，并进入该文件夹，执行以下命令克隆仓库。
```bash
git clone https://github.com/uxiaohan/vhAstro-Theme.git 

```

> **配置说明**  
> 修改前请参考：[vhAstro主题配置文档](https://www.vvhan.com/article/astro-theme-vhastro-theme)  
> 暂不执行 `npm install`
- 克隆之后进入到`vhAstro-Theme\src\config.ts`,按照里面的注释将所有的配置都改为适合自己的需求。
- 不需要的配置为false，字符串的话就保持空字符串即可。
- 侧边个人网站不要要的话就注释掉。
- 删除掉`src\contenet\blog`中的所有文件，这样的话就不会有文章，当然你如果需要预览样式的话，也可以不删除
- 重要的最后一点:先删掉`package-lock.json`锁文件，在`package.json`中找到`overrides`，改为这样
  ```json
  "overrides": {
    "yaml": "2.7.1",
    "cosmiconfig": { "yaml": "2.7.1" },
    "cssnano": { "yaml": "2.7.1" },
    "postcss-load-config": { "yaml": "2.7.1" }
  }
  ```
  接着根目录创建 `.npmrc` 文件：
  ```ini
  shamefully-hoist=true
  save-exact=true
  ```
### 2.本地预览
接着
```bash
npm install
pnpm dev
```
然后会输出类似的内容：
```bash
> vhastro@0.0.1 dev E:\vhAstro-Theme
> rmdir /s /q .astro && astro dev

21:37:50 [types] Generated 1ms
21:37:51 [content] Syncing content
21:37:52 [content] Synced content

 astro  v5.6.1 ready in 2354 ms

┃ Local    http://localhost:4321/
┃ Network  http://192.168.1.4:4321/
...
```
浏览器随便访问一个网址，就会看到效果了。
并且当你在修改后，浏览器会自动刷新。

### 3.推送至GitHub
新建一个公开的GitHub仓库，将项目完整的推送到该仓库。
我使用的是PyCharm，右键项目根目录下，选择`Git`->管理远程->删除原来的远程仓库，并添加新建的远程仓库。
![示例 =100×100](https://zycs-img-c5u.pages.dev/v2/mh7b1Xp.png)

### 4.Cloudflare配置
1. 访问 [Cloudflare控制台](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** → **创建应用程序** → **Pages**
![配置示意图](https://zycs-img-c5u.pages.dev/v2/yHa2Xjy.png)
3. 连接Git仓库并授权访问你刚刚新建的仓库。
4. **环境变量设置**

| 键              | 值          |
|-----------------|------------|
| `NODE_VERSION`  | `18.19.0`  |

**构建命令配置**
```bash
npm install --force && npm run build
```
注意选择框架预设
![构建界面](https://zycs-img-c5u.pages.dev/v2/DYApz5Q.png)

5.等待项目构建完成，完成之后cloudflare就会自动给你生成一个`*.pages.dev`的公网网址，访问该网址就可以看到你的博客了。
### 5.自定义域名
1. 进入 Pages 项目设置
2. 选择 **自定义域**
3. 输入已有的域名并按指引配置DNS
---
### 6.怎么写博客？
按照图示创建一个任务(我不知道VC CODE怎么搞，请自行百度，但是JB全家桶应该都有)
![3c4c591f82c0a7f1fd9914e750cf7e46.png](https://zycs-img-c5u.pages.dev/v2/fW9uvVz.png)
需要写博客的之后运行一下这个任务，就会自动生成md文件，写完之后push到GitHub，然后等待Cloudflare自动更新。