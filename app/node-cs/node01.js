// /**
//  * Created by nangua on 16/11/10.
//  */
// const Koa = require('koa');
// // const Router = require('koa-router')
// // const router = new Router()
// const app = new Koa();
//
// app.use((ctx,next) => {
//     console.log('1111',next)
//     ctx.body = 'Hello Koa';
//     return next().then(() => {
//         console.log('2222')
//     })
// });
// app.use(function (ctx, next){
//    return next().then(()=>{
//        console.log('33333')
//    });
// });
//
// // logger
//
// app.use(function *(next){
//     yield next;
//     console.log('44444');
// });
//
// // response
//
// app.use(function *(){
//     console.log('5555')
//     this.body = 'Hello World';
// });
//
// app.listen(1111,() => {
//     console.log('启动.....')
// });


// yield
function demo() {
    return 100
}

function* helloWorldGenerator() {
    console.log('11111')
    let a = 'yes1'
    if(a === 'yes'){
        yield 'yes'
    }else {
        yield 'no'
    }
    console.log('22222')
    yield 'world';
    console.log('33333')
    // return 'ending';
}
var hw = helloWorldGenerator()
if(hw.next().value === 'yes') {
    hw.next()
}

