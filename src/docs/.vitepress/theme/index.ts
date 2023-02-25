import DefaultTheme from 'vitepress/theme'
import plugin from './layouts/plugin/index.vue'
import type { Theme } from 'vitepress'
import './index.less'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)

    ctx.app.component('Plugin',plugin)
  }
}as Theme