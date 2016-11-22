/**
 * Created by nangua on 16/11/22.
 */
import App from './app.vue'
import Shop from './shop.vue'
export function initRoute (subRoutes) {
    return {
        '/shop': {
            component: App,
            // pageTitle: '商户首页',
            subRoutes: {
                '/': {
                    name: 'shop',
                    component: Shop
                },
                ...subRoutes
            }
        }
    }
}
