import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegistrationPage.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  try {
    const response = await fetch('http://localhost:9000/session', {
      credentials: 'include'
    })
    if (to.meta.requiresAuth && response.status !== 200) {
      next('/')
    } else {
      next()
    }
  } catch (error) {
    next('/')
    console.error(error)
  }
})

export default router
