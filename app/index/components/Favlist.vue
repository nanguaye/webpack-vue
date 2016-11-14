<template>
  <div class="favlist-page">
    <div class="title">this is favlist {{a}}{{b}}{{c}}</div>
    <div class="move">移动</div>
    <img :src="iconShop">
    <img src="~assets/images/icon-shop.png">
    <div class="line">
      <div class="line-1"></div>
      <div class="img"></div>
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
      display : flex
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
      animation: myline 2s infinite;
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
</style>
<script type="text/babel">
  import demoJS  from './demoJS'
  import iconShop from 'assets/images/icon-shop.png'
  export default {
    data() {
      return {
        a: '哈哈',
        b: 'ca',
        c: demoJS.a,
        iconShop:iconShop
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
    methods: {
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