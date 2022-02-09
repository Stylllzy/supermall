<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"
                    @titleClick="titleClick"
                    ref="nav"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommend-info ref="recommend" :recommend-list="recommends"/>
<!--      <goods-list :goods="recommends"/>-->
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <toast :msg="msg" :show="show"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComponents/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComponents/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComponents/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComponents/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailRecommendInfo from "@/views/detail/childComponents/DetailRecommendInfo";
import DetailBottomBar from "@/views/detail/childComponents/DetailBottomBar";
import BackTop from "@/components/content/backTop/BackTop";
import Toast from "@/components/common/toast/Toast";

import Scroll from "@/components/common/scroll/Scroll";

import {getDetail, getRecommend, Goods, GoodsParam, Shop,} from "@/network/detail";
import {debounce} from "@/common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      isShowBackTop: false,
      getThemeTopY: null,
      currentIndex: 0,
      msg: '',
      show: false
    }
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('imageLoad',() => {
      // this.$refs.scroll.refresh()
      refresh()
    })
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

      // 保存商品详情数据
      this.detailInfo = data.detailInfo

      // 获取商品参数界面数据
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 获取评论信息数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

    })
    // 推荐商品
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })

    // 给 getThemeTopY 赋值 (对 this.themeTopYs 进行防抖操作)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.themeTopYs);
    },100)
  },
  updated() {

  },
  methods: {
    contentScroll(position) {
      const positionY = -position.y
      // 判断 backtop 是否显示
      this.isShowBackTop = positionY > 1500

      // positionY 和主题中值进行对比
      let length = this.themeTopYs.length
      for(let i = 0;i < length;i++) {
        if(this.currentIndex !== i && ((i < length - 1 && positionY > this.themeTopYs[i] && positionY
          < this.themeTopYs[i+1] || (i === length - 1 && positionY > this.themeTopYs[i])))){
          this.currentIndex = i
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    imageLoad() {
      this.$refs.scroll.refresh()

      this.getThemeTopY()
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    addToCart() {
      // 获取
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice
      product.iid = this.iid

      // 添加到购物车
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res => {
        // this.show = true
        // this.msg = res
        // console.log(res);
        // setTimeout(() => {
        //   this.show = false
        //   this.msg = ''
        // },2000)

        this.$toast.show(res,1500)
      })

    },

  }
}
</script>

<style scoped>
  #detail {
    /*position: relative;*/
    z-index: 9;
    background-color: #fff;
    height: 100%;
  }

  .detail-nav-bar {
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
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
