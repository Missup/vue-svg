import Home from '../page/home/index'
import Analysis from '../page/analysis/index'
import Design from '../page/design/index'
import Monitor from '../page/monitor/index'
import Edit from '../page/design/edit'
import Test from '../page/design/test'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/analysis',
    component: Analysis
  },
  {
    path: '/design',
    component: Design
  },
  {
    path: '/design/edit',
    component: Edit
  },
  {
    path: '/design/test',
    component: Test
  },
  {
    path: '/monitor',
    component: Monitor
  }
]
