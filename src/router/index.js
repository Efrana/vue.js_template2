import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Pages/Home'
import Blog from '@/components/Pages/Blog'
import Post from '@/components/Pages/Post'
import Details from '@/components/Pages/Details'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/details/:teamid',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
