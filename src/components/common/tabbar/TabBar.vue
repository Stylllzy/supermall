<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {

  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #e3e3e3;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -2px 10px rgba(100,100,100,.1);
}


</style>