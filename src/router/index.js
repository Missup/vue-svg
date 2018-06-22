import Home from '../page/home/index'
import Analysis from '../page/analysis/index'
import Design from '../page/design/index'
import Monitor from '../page/monitor/index'
import Edit from '../page/design/edit'

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
    path: '/monitor',
    component: Monitor
  }
]
