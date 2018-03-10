
import ajax from './ajax'
/*
根据经纬度获取位置详情*
 */
export const reqAddress = (geohash) =>ajax('/api/position/' + geohash)

/*
获取食品分类列表
*/

export const reqFoodTypes= () =>ajax('/api/index_category')

/*
根据经纬度获取商铺列表
*/

export const reqShops = ({latitude, longitude}) =>ajax('/api/shops', {latitude, longitude})

/*获取一次性验证码*/

export const reqCaptach =()=>ajax('/api/captcha')

/*
用户名密码登陆
*/

export const loginPwd = ({name, pwd, captach}) =>ajax('/api/login_pwd',{name, pwd, captach},'POST')

/*发送短信验证码*/

export const sendCode =(phone) => ajax('/api/sendcode',{phone})


/*
手机号验证码登陆
*/

export const smsLogin =({phone, code})=>ajax('/api/login_sms',{phone, code},'POST')


/*根据会话获取用户信息*/

export const reqUser = () => ajax('/api/userinfo')
