import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/playhome/",
    children: [{
      text: "playhome",
      icon: "ellipsis",
      link: ""
    }],
      // {
      //   text: "Foo",
      //   icon: "lightbulb",
      //   prefix: "foo/",
      //   children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      // },
  },
]);
