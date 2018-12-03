import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import('../components/demo/Index'),
        },
        {
            path: "/tableAllSelect",
            name: "TableAllSelect",
            component: () => import('../components/demo/TableAllSelect'),
        },
        {
            path: "/tableProp",
            name: "TableProp",
            component: () => import('../components/demo/TableProp'),
        }
    ]
})
