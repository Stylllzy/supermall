<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
  }

  .left, .right {
    width: 60px;
    /*background-color: pink;*/
  }

  .center {
    flex: 1;
    /*background-color: grey;*/
  }

  /*.left, .center, .right {*/
  /*  display: grid;*/
  /*  place-items: center;*/
  /*}*/
</style>
