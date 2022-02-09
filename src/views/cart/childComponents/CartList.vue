<template>
  <div>
    <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'

  import {mapGetters} from "vuex";

  export default {
		name: "CartList",
    computed: {
      ...mapGetters(['cartList'])
    },
    components: {
      CartListItem
    },
    // props: {
		//   cartList: {
		//     type: Array,
    //     default() {
		//       return []
    //     }
    //   }
    // }
	}
</script>

<style scoped>

</style>
