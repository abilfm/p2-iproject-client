import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductCategoryPage from '../views/CategoryPage.vue'
import ProductDetailsPage from '../views/ProductDetailsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/category',
    name: 'ProductCategoryPage',
    component: ProductCategoryPage
  },
  {
    path: '/category/product',
    name: 'ProductDetails',
    component: ProductDetailsPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'ContactUsPage',
    component: ContactUsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
