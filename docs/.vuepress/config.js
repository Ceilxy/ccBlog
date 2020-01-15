
module.exports = {
    base: '/ccBlog/',
    title: '个人主页',
    description: 'Vuepress blog demo',
    head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }]
  ],
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/Ceilxy/ccBlog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/vue/vuex' },
          { text: 'About', link: '/about/' }
        ],
        sidebar: {
          '/vue/': [
            'vuex',
            'axios',
            'one'
          ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
      }

}