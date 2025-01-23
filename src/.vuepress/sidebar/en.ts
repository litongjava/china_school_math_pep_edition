import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "必修1",
      collapsible: true, // 是否可折叠
      link: "/math/必修1/", // 可选：点击分组标题时跳转的链接
      prefix: "/math/必修1/", // 可选：用于 children 的路径前缀
      children: ["readme/", "第1章/", "第2章/", "第3章/"],
    },
    {
      text: "必修2",
      collapsible: true,
      link: "/math/必修2/",
      prefix: "/math/必修2/",
      children: ["readme/", "第1章/", "第2章/", "第3章/", "第4章/"],
    },
    {
      text: "必修3",
      collapsible: true,
      link: "/math/必修3/",
      prefix: "/math/必修3/",
      children: ["readme/", "第1章/", "第2章/", "第3章/", "Afterword/"],
    },
    {
      text: "必修4",
      collapsible: true,
      link: "/math/必修4/",
      prefix: "/math/必修4/",
      children: ["readme/", "第1章/", "第2章/", "第3章/", "Afterword/"],
    },
    {
      text: "必修5",
      collapsible: true,
      link: "/math/必修5/",
      prefix: "/math/必修5/",
      children: ["readme/", "第1章/", "第2章/", "第3章/", "Afterword/"],
    },
    "/math/选修1-1/",
    "/math/选修1-2/",
    "/math/选修2-1/",
    "/math/选修2-2/",
    "/math/选修2-3/",
    "/math/选修3-1/",
    "/math/选修3-2/",
    "/math/选修3-3/",
    "/math/选修3-4/",
    "/math/选修4-1/",
    "/math/选修4-2/",
    "/math/选修4-4/",
    "/math/选修4-5/",
  ],
});
