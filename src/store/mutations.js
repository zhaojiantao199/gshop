/*直接更新state的多个方法的对象*/
import {
  RECEIVE_ADRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  }
}
