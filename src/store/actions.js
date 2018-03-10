
import {
  reqAddress,
  reqShops,
  reqFoodTypes
} from '../api/index'

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_TYPES
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
}
