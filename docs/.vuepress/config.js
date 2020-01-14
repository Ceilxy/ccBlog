
module.exports = {
    base: '/ccBlog/',
    title: '个人主页',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/Ceilxy/ccBlog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/vue/' }
        ],
        sidebar: [
          ['/', '首页'],
          ['/vue/', 'Vue学习']
          // ['/blog/', 'Axios']
        ]
      }

}