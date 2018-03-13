
export default {
  totalCount(state){
    return state.shopCart.reduce((preTotal,food)=>{
      return preTotal + food.count
    },0)
  },
  totalPrice(state){
    return state.shopCart.reduce((preTotal,food)=>{
      return preTotal + food.count*food.price
    },0)
  }
}
