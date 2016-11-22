/**
 * Created by nangua on 16/11/22.
 */

import App from './app.vue'
import Home from './home.vue'
export function initRoute (subRoutes) {
    return {
        '/home': {
            component: App,
            // pageTitle: '商户首页',
            subRoutes: {
                '/': {
                    name: 'home',
                    component: Home
                },
                ...subRoutes
            }
        }
    }
}
