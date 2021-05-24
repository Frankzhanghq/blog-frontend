// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
console.log('---------------------', process.env)
module.exports = {
  siteName: '辣子鸡博客',
  siteDescription: '大前端',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['home', 'social', 'blog', 'project'],
        typeName: 'Strapi'
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiBlog: [
      {
        path: '/blogDetail/:id',
        component: './src/templates/MyPage.vue'
      }
    ],
    StrapiProject: [
      {
        path: '/projectDetail/:id',
        component: './src/templates/MyPage.vue'
      }
    ]
  }
}
