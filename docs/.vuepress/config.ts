import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  base: '/learn-typescript/',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      { text: '首页', link: '/' },
      {
        text: 'william的 JavaScript blog',
        children: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/712139234359182/posts',
          },
        ],
      },
    ],
  }),
})
