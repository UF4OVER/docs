import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文档",
      icon: "book",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "playhome",
      icon: "play",
      prefix: "playhome/",
      link: "playhome/",
      children: "structure",
    },
    {
      text: "网站部署",
      icon: "book",
      prefix: "网站部署指南/",
      link: "网站部署指南/",
      children: "structure",
    }
  ],
});
