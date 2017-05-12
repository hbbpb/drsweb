export default [
  {
    path: '/signup/',
    component: require('./assets/vue/pages/signup.vue')
  },
  {
    path: '/literature/',
    component: require('./assets/vue/pages/literature.vue')
  },
  {
    path: '/search/',
    component: require('./assets/vue/pages/search.vue')
  },
  {
    path: '/favorite/',
    component: require('./assets/vue/pages/favorite.vue')
  },
  {
    path: '/setting/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/help/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
