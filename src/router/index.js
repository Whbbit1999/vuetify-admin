import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import EditArticle from '../views/EditArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'/articles/index'
  },
  {
    path: '/articles/index',
    name: 'list-article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditArticle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
