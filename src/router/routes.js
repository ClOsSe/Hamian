import store from '@/state/store'

export default [
  {
    path: '/',
    name: 'default',
    component: () => import('./views/Index')
  },
  {
    path: '/login',
    name: 'login',
    meta:{isPublic:true},
    component: () => import('./views/auth/Login.vue')
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    meta:{isPublic:true},
    component: () => import('./views/auth/CreateAccount.vue')
  },
  {
    path: '/LoginWithFile',
    name: 'loginwithfile',
    meta:{isPublic:true},
    component: () => import('./views/auth/LoginWithFile.vue')
  },
  {
    path: '/LocalLogin',
    name: 'locallogin',
    meta:{isPublic:true},
    component: () => import('./views/auth/LocalLogin.vue')
  },
  
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
