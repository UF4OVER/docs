import { CodeTabs } from "E:/Js_project/vuepress/UF4DOCS/node_modules/.pnpm/@vuepress+plugin-markdown-t_3adac942171b68050dabac53aee1ecc4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/Js_project/vuepress/UF4DOCS/node_modules/.pnpm/@vuepress+plugin-markdown-t_3adac942171b68050dabac53aee1ecc4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/Js_project/vuepress/UF4DOCS/node_modules/.pnpm/@vuepress+plugin-markdown-t_3adac942171b68050dabac53aee1ecc4/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
