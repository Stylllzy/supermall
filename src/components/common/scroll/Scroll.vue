<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        observeDOM: true,
        mouseWheel: true,
        observeImage: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })


      // 监听滚动位置
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })

      // 监听上拉加载更多
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },1000)
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('---');
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
