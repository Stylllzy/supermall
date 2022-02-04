<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"/>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import RecommendView from "@/views/home/childComponents/RecommendView";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      // result: null
      banners: [],
      recommends: []
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      // this.result = res
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })

  }
}
</script>

<style scoped>
  .home-nav {
    background-color: #fb7299;
    color: #e3e3e3;

    /*position: fixed;*/
    left: 0;
    right: 0;
    /*top: 0;*/
  }
</style>
