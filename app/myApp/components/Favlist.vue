<template>
  <div class="favlist-page">
    <div class="title">this is favlist {{a}}{{b}}{{c}}</div>
    <div class="move">移动</div>
    <img :src="iconShop">
    <img src="~public/images/icon-shop.png">
    <button style="border: 1px solid" @click="fetchUrl()">发送请求</button>
    <div class="line">
      <div class="line-1"></div>
      <div class="img"></div>
    </div>
    <!--曲线运动-->
    <div class="run"></div>
    <!--转盘-->
    <div class="turntable">
      <div class="turntable-content" v-myxz>
        <section class="s1"></section>
        <section class="s2"></section>
        <section class="s3"></section>
        <p class="p1">一等奖</p>
        <p class="p2">二等奖</p>
        <p class="p3">谢谢惠顾</p>
        <p class="p4">三等奖</p>
        <p class="p5">再来一次</p>
        <p class="p6">特等奖</p>
      </div >
      <!--指针-->
       <div class="turntable-pointer" @click="begin()">
         <em></em>
       </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
@import './classOne.styl'
.favlist-page
  padding 0
  margin 0
  .title
    font-size 24px
    display: flex
  .move
    width 140px
    height 100px
    border-radius 10px
    font-size 28px
    position relative
    animation mymove 2s infinite
    animation-delay 0
    animation-iteration-count 5
  .line
    height 500px
    width 0
    background-color yellow
    opacity 0.5
    margin 0 auto
    animation: myline 2s infinite
    animation-delay: 0s
    .line-1
      height 30px
      width 100%
      background-color blue
  @keyframes mymove
               0%
                 transform rotate(30deg)
                 left 0
               25%
                 left 100px
                 transform rotate(0deg)
               50%
                 left 100px
                 transform rotate(-30deg)
               75%
                 left 0
                 transform rotate(0deg)
               100%
                 left 0
                 transform rotate(-360deg)
  @keyframes myline
                0%
                  width 40px
                  transform scale(1)
                25%
                  width 20px
                  transform scale(0.4)
                50%
                  width 40px
                  transform scale(0.6)
                75%
                  width 20px
                  transform scale(0.4)
                100%
                  width 10px
                  transform scale(1)
  .turntable
    margin 20px auto
    height 400px
    width 400px
    border-radius 400px
    border 2px solid #E17F27
    position relative
    .turntable-content
      width 100%
      height 100%
      position relative
      animation xz 5s infinite
      animation-fill-mode forwards
      section
        width 400px
        height 1px
        background-color #e5e5e5
        position absolute
        top 200px
        left 0
      section.s2
        transform rotateZ(60deg)
      section.s3
        transform rotateZ(120deg)
      p
        font-size 24px
        position absolute
      p.p1
        top 100px
        left 40px
      p.p2
        top 50px
        left 160px
      p.p3
        top 100px
        left 270px
      p.p4
        top 220px
        left 270px
      p.p5
        top 280px
        left 150px
      p.p6
        top: 220px
        left 40px
    .turntable-pointer
      position absolute
      top 50%
      right 50%
      transform translate(50%,-50%)
      height 40px
      width 40px
      border-radius 40px
      background-color red
      em
        display block
        width 0
        height 0
        border 10px solid transparent
        border-bottom 40px solid red
        position absolute
        left 10px
        top -40px
  .run
    position relative
    height 20px
    width 20px
    margin 0 auto
    border-radius 20px
    background-color red
    animation runTop 2s infinite cubic-bezier(0.42, 0, 0.58, 1.0),runLeft 2s infinite cubic-bezier(0, 0, 0.58, 1.0)
  @keyframes runTop
               0%
                 top 0
               25%
                 top 100px
               50%
                 top 200px
               75%
                 top 100px
               100%
                 top 0
  @keyframes runLeft
               0%
                 left 0
               25%
                 left 100px

               50%
                 left 0
               75%
                 left -100px
               100%
                 left 0

</style>
<script type="text/babel">
  import iconShop from 'public/images/icon-shop.png'
  import myFetch from 'sdk/fetch.js'
  export default {
    data() {
      return {
        a: '哈哈',
        b: 'ca',
        c: 'ych',
        iconShop:iconShop,
        xz: false
      }
    },
    ready(){
      this.demo2(1).then((val1)=>{
        return val1
      }).then((val2)=>{
        val2('ych').then((v)=>{
          console.log('v',v)
        })
      });
    },
    directives: {
      myxz:{
        bind: function () {
          console.log('绑定好指令了', this.el, this.vm.bg)
          this.el.addEventListener('webkitAnimationStart', ()=> {
            console.log('开始动画')
          })
          this.el.addEventListener('webkitAnimationEnd', ()=> {
            console.log('结束')
            document.getElementsByTagName('style')[1].remove()
          })
        }
      }
    },
    methods: {
      fetchUrl(){
        console.log('发送请求')
        let url = "/shopping/restaurants?latitude=30.32347&longitude=120.17383&offset=0&limit=20&extras[]=activities"
        myFetch(url, 'GET').then((res)=>{
          console.log('suc', res)
        }).catch((err)=>{
          console.log('err网络', err)
        })
      },
      begin(){
        console.log(this.$el.querySelector('.turntable-content'))
        let num = 720 + (Math.random()*10)*30
        let style = document.createElement('style'),
        str = `.turntable-content {animation-iteration-count:1!important} @keyframes xz {100% {transform:rotateZ(${num}deg)}`
        style.type="text/css"
        if (style.styleSheet){
          style.styleSheet.cssText = str;
        } else{
          style.innerHTML = str
        }
        document.getElementsByTagName('head')[0].appendChild(style);
      },
      end(){
        console.log('111111end')
      },
      demo1(name){
        return new Promise((rev,rec)=>{
          if(name === 'ych') {
            rev('成功了!!')
          }
        })
      },
      demo2(num) {
        return new Promise((rev,rec)=>{
          if(num === 1) {
            rev(this.demo1)
          }
        })
      }
    }
  }
</script>