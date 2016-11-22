/**
 * Created by nangua on 16/10/31.
 */
import './sdk/responsive'
import './config'
import App from './views/app.vue'
import router from './router'
console.log(router)
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/home"//重定向任意未匹配路径到/index
});
router.start(App, '#app')