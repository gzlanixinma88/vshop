import Mock from 'mockjs'

import data from './data'

Mock.mock('/goods',{code:0,goods:data.goods})
Mock.mock('/ratings',{code:0,ratings:data.ratings})
Mock.mock('/info',{code:0,info:data.info})
