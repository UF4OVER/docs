import comp from "E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"bgImage\":\"https://zycs-img-c5u.pages.dev/v2/ridc7vj.png\",\"bgImageDark\":\"https://zycs-img-c5u.pages.dev/v2/H2WQJnm.jpeg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"UF4的文档\",\"tagline\":\"此站点仅用来存储我闲时写的一些文档\",\"actions\":[{\"text\":\"我的主页\",\"link\":\"https://uf4.top/\",\"type\":\"primary\"},{\"text\":\"我的博客\",\"link\":\"https://blog.uf4.top/\",\"type\":\"primary\"},{\"text\":\"我的图床\",\"link\":\"https://img.uf4.top/\",\"type\":\"primary\"},{\"text\":\"文档\",\"link\":\"./playhome/\"}],\"copyright\":false,\"footer\":\"UF4 | 2025 © 四氟化铀（UF4）\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"UF4档案馆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.51,\"words\":152},\"filePathRelative\":\"README.md\"}")
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
