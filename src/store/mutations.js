
import {
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_ADDRESS
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
}
