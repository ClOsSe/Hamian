import store from '@/state/store'

export default [
  {
    path: '/',
    name: 'default',
    component: () => import('./views/Index')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('./views/auth/Login.vue')
  // },
  // {
  //   path: '/CreateAccount',
  //   name: 'CreateAccount',
  //   component: () => import('./views/auth/CreateAccount.vue')
  // },
  // {
  //   path: '/LoginWithFile',
  //   name: 'loginwithfile',
  //   component: () => import('./views/auth/LoginWithFile.vue')
  // },
  // {
  //   path: '/LocalLogin',
  //   name: 'locallogin',
  //   component: () => import('./views/auth/LocalLogin.vue')
  // },
  
  // {
  //   path: '/ReLink',
  //   name: 'relink',
  //   component: () => import('./views/auth/ReLink.vue')
  // },
  // {
  //   path: '/TransactionSign',
  //   name: 'TransactionSign',
  //   component: () => import('./views/transaction/TransactionSign.vue')
  // },
  
]
