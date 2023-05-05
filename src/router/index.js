import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create-author',
    name: 'create-author',
    component: () => import('../components/CreateAuthor'),
  },

  {
    path: '/create-book',
    name: 'create-book',
    component: () => import('../components/CreateBook'),
  },

  {
    path: '/author',
    name: 'author',
    component: () => import('../components/ListAuthor'),
  },

  {
    path: '/book',
    name: 'book',
    component: () => import('../components/ListBook'),
  },

  {
    path: '/edit-author/:id',
    name: 'edit-author',
    component: () => import('../components/EditAuthor'),
  },

  {
    path: '/edit-book/:id',
    name: 'edit-book',
    component: () => import('../components/EditBook'),
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
