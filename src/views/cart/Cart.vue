<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list/>
    </scroll>

    <bottom-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComponents/CartList";
import BottomBar from "@/views/cart/childComponents/BottomBar";
import Scroll from '@/components/common/scroll/Scroll'


import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
    Scroll
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  #cart {
    height: 100%;
  }

  .nav-bar {
    background-color: #FF8198FF;
    color: #fff;
    margin-top: 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
