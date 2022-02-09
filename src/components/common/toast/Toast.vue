<template>
  <div class="toast"
       v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    // msg: {
    //   type:String,
    //   default: ''
    // },
    // show: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      msg: '',
      isShow: false
    }
  },
  methods: {
    show(msg,duration=2000) {
      this.isShow = true
      this.msg = msg

      setTimeout(() => {
        this.isShow = false
        this.msg = ''
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 10px 12px;
    font-size: medium;
    transform: translate(-50%,-50%);
    border-radius: 10px;

    background-color: rgba(255,255,255,.8);
  }
</style>
