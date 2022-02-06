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
        probeType: this.probeType
      })
    },1000)

    // 监听滚动位置
    this.scroll.on('scroll',(position) => {
      console.log(position);
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>
