<template>
<div>
  <nav-bar class="detail-nav">
    <div slot="left" class="back" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="titles">
      <div class="titles-item"
           v-for="(item,index) in titles"
           :class="{active: index === currentIndex}" @click="titleClick(index)">
        {{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      // this.$router.go(-1)
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  /*.detail-nav {*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*  z-index: 9;*/
  /*}*/

  .titles {
    display: flex;
    font-size: 16px;
  }

  .titles-item {
    flex: 1;
  }

  .back img {
    margin-top: 12px;
  }

  .active {
    color: #FF5777FF;
  }
</style>
