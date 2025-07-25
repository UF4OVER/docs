import comp from "E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"档案主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"portfolio\":false,\"title\":\"档案主页\",\"icon\":\"house\",\"welcome\":\"你好，我是\",\"name\":\"四氟化铀（UF4）\",\"avatar\":\"https://img.uf4.top/v2/Pz4QQFb.png\",\"titles\":[\"废物发明家\",\"肥宅一个\",\"三分钟热度\"],\"footer\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"档案主页\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"UF4\\\",\\\"url\\\":\\\"https://uf4.top\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/portfolio.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"UF4档案馆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"档案主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.54,\"words\":161},\"filePathRelative\":\"portfolio.md\"}")
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
