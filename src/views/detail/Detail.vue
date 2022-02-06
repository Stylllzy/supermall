<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComponents/DetailShopInfo";

import {getDetail,Goods,Shop} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    // 保存输入的iid
    this.iid = this.$route.params.iid

    // 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      // 获取顶部轮播数据
      this.topImages = data.itemInfo.topImages

      //  获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 获取商家信息
      this.shop = new Shop(data.shopInfo)
    })
  }
}
</script>

<style scoped>

</style>
