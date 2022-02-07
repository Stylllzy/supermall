<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
      <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from '@/components/content/goods/GoodsListItem'

	export default {
		name: "DetailRecommendInfo",
    components: {
      GoodsListItem
    },
    props: {
		  recommendList: {
		    type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style scoped>
  .recommend-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

  .info-header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
