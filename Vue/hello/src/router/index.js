import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Transition from '@/components/Transition'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {  // 内置过度动画
            path: '/transition',
            name: 'Transition',
            component: Transition
        },
        {
            // 布局
            path: '/layout',
            name: 'Layout',
            component: () => import('@/components/Layout')
        },
        {
            // Container布局容器
            path: '/container',
            name: 'Container',
            component: () => import('@/components/Container')
        }
    ]
})
