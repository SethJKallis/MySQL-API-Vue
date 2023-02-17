import { createRouter, createWebHistory } from 'vue-router'
import CreateProduct from '../views/AddProductView.vue'
import EditProduct from '../views/EditProductView.vue'
import IndexProduct from '../views/ProductListView.vue'

const routes = [
  {
    path: '/',
    name: 'indexProduct',
    component: IndexProduct
  },
  {
    path: '/edit/:id',
    name: 'editProduct',
    component: EditProduct
  },
  {
    path: '/create',
    name: 'createProduct',
    component: CreateProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
