/**
 * Created by nangua on 16/11/21.
 */
import VueRouter from 'vue-router'
import routers from './routers'

// 创建一个路由实例
const router = new VueRouter({
    history: true
})
// 定义路由的映射之类的
router.map(routers)

export default router