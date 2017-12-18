module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ryths Blog',
    titleTemplate: '%s | ryths.cn',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'author', content: 'Ryths,postmaster@ryths.cn'},
      {name: 'keywords', content: 'blog,Ryths,IT,JAVA,Vue,前端,后端,研究生'},
      {name: 'description', content: '个人技术博客，分享知识，寻找志同道合的朋友'},
      {name: 'copyright', content: 'Ryths Xia'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/public.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},
  plugins: [
    '~/plugins/http',
    '~/plugins/components',
    '~/plugins/filters'
  ],
  build: {
    extractCSS: true
  }
}
