import Vue from 'vue'
import {
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_ADDRESS,
  RECEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECEIVE_TYPES] (state,{foodTypes}){
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state,{userInfo}){
    state.userInfo = userInfo
  },
  [RECEIVE_GOODS] (state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state,{info}){
    state.info = info
  },
  [INCREMENT_FOOD_COUNT] (state,{food}){
    if (!food.count){
      Vue.set(food,'count', 1)
      state.shopCart.push(food)
    }else{
      food.count ++

    }
  },
  [DECREMENT_FOOD_COUNT] (state,{food}){
    if(food.count){
      food.count --
      if(food.count === 0){
        state.shopCart.splice(state.shopCart.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    state.shopCart.forEach(food=>food.count=0)
    state.shopCart = []
  }
}
