
module.exports = {
    base: '/ccBlog/',
    title: 'CC Blog',
    description: 'Vuepress blog',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/Ceilxy/ccBlog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Vue', link: '/vue/vuex' },
          { text: 'JS', link: '/js/js-note' },
          { text: 'About', link: '/about/' }
        ],
        sidebar: {
          '/vue/': [
            'vue-note',
            'vuex',
            'mockJS'
          ],
          '/js/': [
            'js-note',
            'http-server'
          ]
        },
        smoothScroll: true,
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
      }

}