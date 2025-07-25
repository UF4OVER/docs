export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"档案主页","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"title":"布局与功能禁用","icon":"gears","order":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"title":"密码加密的文章","icon":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"title":"布局","icon":"object-group","order":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"title":"Markdown 展示","icon":"fa6-brands:markdown","order":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"title":"页面配置","icon":"file","order":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":""} }],
  ["/playhome/%E5%B4%A9%E5%9D%8F%E5%AE%B6%E6%97%8F%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9(1).html", { loader: () => import(/* webpackChunkName: "playhome_崩坏家族注意事项(1).html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/playhome/崩坏家族注意事项(1).html.js"), meta: {"title":"游戏重要使用说明","icon":"lightbulb"} }],
  ["/playhome/%E5%B4%A9%E5%9D%8F%E5%AE%B6%E6%97%8F%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9(2).html", { loader: () => import(/* webpackChunkName: "playhome_崩坏家族注意事项(2).html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/playhome/崩坏家族注意事项(2).html.js"), meta: {"title":"关于Play Home","icon":"lightbulb"} }],
  ["/playhome/%E5%B4%A9%E5%9D%8F%E5%AE%B6%E6%97%8F%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9(3).html", { loader: () => import(/* webpackChunkName: "playhome_崩坏家族注意事项(3).html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/playhome/崩坏家族注意事项(3).html.js"), meta: {"title":"PlayHome Studio","icon":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/playhome/", { loader: () => import(/* webpackChunkName: "playhome_index.html" */"E:/Js_project/vuepress/UF4DOCS/src/.vuepress/.temp/pages/playhome/index.html.js"), meta: {"title":"Playhome"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
