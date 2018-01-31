import Vue from 'vue'
import Router from 'vue-router'
import BookList from '../components/BookList'
import NewBook from '../components/NewBook'
import BookDetails from '../components/BookDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/new',
      name: 'New',
      component: NewBook
    }
    ,
    {
      path: '/details/:id',
      name: 'Details',
      component: BookDetails
    }
  ]
})
