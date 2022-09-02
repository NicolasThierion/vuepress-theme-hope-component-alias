import { defineUserConfig, Theme } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { path } from "@vuepress/utils";
const customTheme = (): Theme => {
  return {
    name: "test",
    extends: hopeTheme({}),
    alias: {
      "@theme-hope/components/HomeFeatures.js": path.resolve(
        __dirname,
        "src/components/HomeFeatures.vue"
      ),
    },
  };
};

export default defineUserConfig({
  theme: customTheme(),
});
