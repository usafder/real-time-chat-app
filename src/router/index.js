import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (chat.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    props: true,
    component: () => import('../pages/Chat.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params?.username) {
        next()
      } else {
        next(from.path)
      }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
