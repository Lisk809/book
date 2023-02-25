import Theme from 'vitepress-theme-code-block'
import NotFound from './NotFound.vue'
import plugin from './layouts/plugin/index.vue'
import type { Theme } from 'vitepress'
import './index.less'
//import MyLayout from './test.vue'
export default {
  ...DefaultTheme,
  //Layout: MyLayout,
  NotFound,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.component('Plugin', plugin)
  }
} as Theme
