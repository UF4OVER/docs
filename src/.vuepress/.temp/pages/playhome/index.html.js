import comp from "E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/playhome/index.html.vue"
const data = JSON.parse("{\"path\":\"/playhome/\",\"title\":\"Playhome\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Playhome\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Playhome\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/playhome/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"UF4档案馆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Playhome\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
