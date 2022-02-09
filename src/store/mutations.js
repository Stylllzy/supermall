export default {
  // 已有商品，数量加一
  addCounter(state,payload) {
    payload.count++
  },
  // 没有商品，加商品
  addToCart(state,payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
