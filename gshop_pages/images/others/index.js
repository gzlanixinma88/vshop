import ajax from './ajax'

export  const reqAddress = geohash =>ajax('./api/position/' + geohash)

export const reqCategorys = () =>ajax('./api/index_catagory')

export const reqShops =({latitude, longitude}) => ajax('/api/shops',{latitude, longitude})

export const reqCaptchas =()=>ajax('/api/captchas')

export const accountLogin = (name, pwd, captchas)=>ajax('/api/login_pwd',{
  name, pwd,captchas
},'POST')

export const mobileCode = phone => ajax('/api/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const phoneLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax('/api/userinfo')
