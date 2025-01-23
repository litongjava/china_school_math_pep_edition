import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "China School Math Pep Edition",
      description: "Chinese Mathematics Textbook, People's Education Press Edition A",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "中国数学教材",
      description: "中国数学教材人教A版",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
