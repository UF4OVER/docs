import comp from "E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/网站部署指南/vhastro-Theme博客部署.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BD%91%E7%AB%99%E9%83%A8%E7%BD%B2%E6%8C%87%E5%8D%97/vhastro-Theme%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2.html\",\"title\":\"Cloudflare一键部署博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Cloudflare一键部署博客\",\"icon\":\"fa6-brands:markdown\",\"order\":2,\"category\":[\"博客\"],\"tag\":[\"Cloudflare\"],\"description\":\"Frontmatter 使用Windows系统，使用Cloudflare进行部署分发，使用GitHub进行版本控制。 部署流程 1.克隆仓库 找个空文件夹，并进入该文件夹，执行以下命令克隆仓库。 配置说明 修改前请参考：vhAstro主题配置文档 暂不执行 npm install 克隆之后进入到vhAstro-Theme\\\\src\\\\config.ts,按...\"},\"readingTime\":{\"minutes\":2.38,\"words\":714},\"filePathRelative\":\"网站部署指南/vhastro-Theme博客部署.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
