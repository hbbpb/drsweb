export default [
  {
    path: '/my/',
    component: require('./assets/vue/pages/my.vue')
  },
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/search/',
    component: require('./assets/vue/pages/search.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
