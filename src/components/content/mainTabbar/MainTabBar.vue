<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="deeppink">
      <img slot="item-icon" src="@/assets/img/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/home_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="deeppink">
      <img slot="item-icon" src="@/assets/img/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="deeppink">
      <img slot="item-icon" src="@/assets/img/cart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/cart_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deeppink">
      <img slot="item-icon" src="@/assets/img/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>