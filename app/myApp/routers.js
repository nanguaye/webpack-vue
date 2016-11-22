/**
 * Created by nangua on 16/11/22.
 */
import { initRoute as initHomeRoute } from './views/home'
import { initRoute as initShopRoute } from './views/shop'
// home页根路由
let HomeRoutes = initHomeRoute()
// 商户根路由
let ShopRoutes = initShopRoute()

export default Object.assign(
    HomeRoutes,
    ShopRoutes
)
