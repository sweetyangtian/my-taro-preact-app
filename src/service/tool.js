import Taro from '@tarojs/taro'
import { getCurrentPageUrl, packBackUrl } from '@/utils'
import { ServerCode, ServerCodeMap, BASE_URL } from './config'
// 错误提示
const showError = (message, show = true) => {
	show &&
		Taro.showToast({
			title: message || '请求异常',
			icon: 'none'
		})
	return Promise.reject(message)
}

// 自定义拦截器
const customInterceptor = chain => {
	const requestParams = chain.requestParams
	return chain
		.proceed(requestParams)
		.catch(res => {
			Taro.hideLoading() // 强制取消加载动画
			return showError(res.errMsg)
		})
		.then(res => {
			/**
			 * 只要请求成功，不管返回什么状态码，都走这个回调
			 * statusCode 浏览器状态码
			 * data.code 接口返回状态码（前后端约定）
			 */

			Taro.hideLoading() // 强制取消加载动画

			let { statusCode } = res,
				data = res.data || {},
				code = data.code ? +data.code : statusCode

			// 未登录
			if (code === ServerCode.NO_LOGIN) {
				const current = getCurrentPageUrl()

				if (current !== 'pages/login/index') {
					const str = packBackUrl()
					Taro.reLaunch({
						url: `/pages/login/index?${str}`
					})
				}

				return showError(data.msg || ServerCodeMap[code], false)
			}

			// 其他异常捕获(状态码非200、400)
			if (![ServerCode.SUCCESS].includes(code)) {
				return showError(data.msg || ServerCodeMap[code])
			}

			return Promise.resolve(data.data)
		})
}

// 添加拦截器
Taro.addInterceptor(customInterceptor)

// 请求前基础配置
const baseOptions = (params, method = 'GET') => {
	let { url, data, showLoading, loadingMsg } = params
	let contentType = 'application/json'
	contentType = params.contentType || contentType

	const option = {
		url: BASE_URL + url,
		data: data,
		method: method,
		header: {
			'content-type': contentType,
			'cookie': Taro.getStorageSync('cookie')
		}
	}

	// 加载动画
	showLoading &&
		Taro.showLoading({
			title: loadingMsg || '加载中'
		})

	return Taro.request(option)
}

// 四种请求方式
export const get = params => baseOptions(params)
export const post = params => baseOptions(params, 'POST')
export const put = params => baseOptions(params, 'PUT')
export const del = params => baseOptions(params, 'DELETE')
