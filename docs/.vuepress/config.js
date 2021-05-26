module.exports = {
  title: '定投人生使用指南',
  description: '首页',
  themeConfig: {
    nav: [
      { text: '入群指南', link: '/guide/join/' },
      { text: '新生指南', link: '/guide/new/' },
      { text: '老生指南', link: '/guide/old/' },
      { text: '关于作者', link: '/author/' },
      { text: '定投人生官方情报站', link: 'https://ri.cms.firesbox.com' },
    ],
    sidebar: [
      '/guide/join/',
      '/guide/new/',
      '/guide/old/',
      '/author/',
    ],
    lastUpdated: '上次更新时间',
    sidebarDepth: true
  }
}