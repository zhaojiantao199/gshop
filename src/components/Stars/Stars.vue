<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
    props:{
      size: Number,//五角心尺寸
      score: Number // 当前分数
    },
    computed: {
      starClasses () {
        const {score} = this
        const scs = []
        //添加n个on   取评分向下取整，取出完整星的个数
        const starInteger = Math.floor(score)
        for (let i = 0; i <starInteger ; i++) {
          scs.push(CLASS_ON)
        }
        //添加0或者1个half  当评分小数大于等于5的时候才插入半星
        if (score * 10 - starInteger *10 >=5) {
          scs.push(CLASS_HALF)
        }
        //添加n个off  当评分低于五分，且存在整分时则插入空星
        while (scs.length < 5){
          scs.push(CLASS_OFF)
        }
        console.log("当前数组长度"+scs.length)
        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
