
import {
  reqAddress,
  reqShops,
  reqFoodTypes,
  reqUser,
  reqGoods,
  reqRatings,
  reqInfo
} from '../api/index'

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
export default {
  async getAddress({commit,state}){
    const geohash =state.latitude + ',' + state.longitude
    const result =await reqAddress(geohash)
    commit(RECEIVE_ADDRESS,{address:result.data})
  },
  async getFoodTypes({commit},callback){
    const result =await reqFoodTypes()
    commit(RECEIVE_TYPES, {foodTypes:result.data})
    callback && callback()
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result =await reqShops({latitude,longitude})
    commit(RECEIVE_SHOPS,{shops:result.data})
  },
  recordUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo ({commit}){
    const result = await reqUser()
    if(result.code === 0){
      commit(RECEIVE_USER_INFO,{userInfo:result.data})
    }
  },
  async getShopInfo ({commit}){
    const result = await reqInfo()
    if(result.code === 0){
      commit(RECEIVE_INFO,{info:result.info})
    }
  },

  async getShopRatings ({commit}){
    const result = await reqRatings()
    if(result.code === 0){
      commit(RECEIVE_RATINGS,{ratings:result.ratings})
    }
  },

  async getShopGoods ({commit},callback){
    const result = await reqGoods()
    if(result.code === 0){
      commit(RECEIVE_GOODS,{goods:result.goods})
      callback && callback()
    }
  },

  updateFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  clearCart({commit}){
    commit(CLEAR_CART)
  }
}
