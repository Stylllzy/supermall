export default {
  addCart(context,payload) {
    return new Promise((resolve, reject) => {
      // payload 为新添加的商品
      let oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payload.iid
      })

      // 判断 oldProduct
      if (oldProduct) {
        // let oldProduct = state.cartList[index]
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量加一')
      } else {
        payload.count = 1
        context.commit('addToCart',payload)
        resolve('成功加入购物车')
      }
    })
  }
}
