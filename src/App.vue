<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

    <main-tab-bar v-if="!/^\/detail/.test($route.path)"/>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar"

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
