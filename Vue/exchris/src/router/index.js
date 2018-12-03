import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/page/table'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        },
        {
            path: '/',
            redirect: '/login'
        },
        /*{
            path: '/login',
            component: resolve => require(['../components/page/user/Login.vue'], resolve)
        },
        {
            path: '/homepage',
            component: () => import('@/pages/homepage/HomePage'),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/page/Index.vue'], resolve)
                },
                {
                    path: '/users',
                    component: resolve => require(['../components/page/user/Users.vue'], resolve)
                },
                {
                    path: '/user/info',
                    component: resolve => require(['../components/page/user/UserInfo.vue'], resolve)
                }
            ]
        }*/
    ]
})
