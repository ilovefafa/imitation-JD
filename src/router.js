import Vue from 'Vue'
import VueRouter from 'vue-router'
// import Index from './view/Index.vue'
// import BorrowMoney from './view/BorrowMoney.vue'
// import MakeMoney from './view/MakeMoney.vue'
// import SaveMoney from './view/SaveMoney.vue'
// import Member from './view/Member.vue'

const Index = () => import('./view/Index.vue')
const BorrowMoney = () => import('./view/BorrowMoney.vue')
const MakeMoney = () => import('./view/MakeMoney.vue')
const SaveMoney = () => import('./view/SaveMoney.vue')
const Member = () => import('./view/Member.vue')


Vue.use(VueRouter)
let routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: '京东金融',
    },
  },
  {
    path: '/BorrowMoney',
    component: BorrowMoney,
    meta: {
      title: '借钱',
    },
  },
  {
    path: '/MakeMoney',
    component: MakeMoney,
    meta: {
      title: '赚钱',
    },
  },
  {
    path: '/SaveMoney',
    component: SaveMoney,
    meta: {
      title: '省钱',
    },
  },
  {
    path: '/Member',
    component: Member,
    meta: {
      title: '金融会员',
    },
  },
]
export default new VueRouter({
  routes,
})

// let routes = [
//   {
//     path: '/',
//     component: Index,
//     meta: {
//       title: '京东金融',
//     },
//   },
//   {
//     path: '/BorrowMoney',
//     component: BorrowMoney,
//     meta: {
//       title: '借钱',
//     },
//   },
//   {
//     path: '/MakeMoney',
//     component: MakeMoney,
//     meta: {
//       title: '赚钱',
//     },
//   },
//   {
//     path: '/SaveMoney',
//     component: SaveMoney,
//     meta: {
//       title: '省钱',
//     },
//   },
//   {
//     path: '/Member',
//     component: Member,
//     meta: {
//       title: '金融会员',
//     },
//   },
// ]