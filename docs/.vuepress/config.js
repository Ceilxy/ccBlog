
module.exports = {
    base: '/ccblog-demo/',
    title: '个人主页',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/Ceilxy/ccBlog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: '我的博客', link: '/vue/vuex/' }
        ]
      },
      sidebar: [
        ['/', '首页'],
        ['/vue/vuex', '我的第一篇博客']
      ]
        
      

      
  

}