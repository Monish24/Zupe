import Router from 'vue-router'
import Vue from 'vue'
import { createRouterLayout } from 'vue-router-layout'
import routes from 'vue-auto-routing'
import Component from 'vue-class-component'

Vue.use(Router)

const RouterLayout = createRouterLayout((layout) => {
  console.log(layout)
  return import('@/layouts/' + layout + '.vue')
})

Console.log(routes)

Component.registerHooks(['beforeRouteUpdate'])

export default new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
  ]
})
