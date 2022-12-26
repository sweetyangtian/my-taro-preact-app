import Taro from '@tarojs/taro'

// 重刷当前页面
export const reloadCurrentPage = () => {
	let pages = Taro.getCurrentPages()
	let currentPage = pages[pages.length - 1]
	currentPage.onLoad(currentPage.options)
}

// 重刷前一个页面
export const reloadPreviousPage = () => {
	let pages = Taro.getCurrentPages()
	let previousPage = pages[pages.length - 2]
	previousPage.onLoad(previousPage.options)
}

// 获取当前页面url参数对象
export const getParams = () => {
	const params = Taro.getCurrentInstance().router.params || {}
	for (let key in params) {
		if (key == '$taroTimestamp') delete params[key]
	}
	return params
}

// 获取当前页面url
export const getCurrentPageUrl = () => {
	let currentPage = ''
	let paramsStr = ''
	let pages = Taro.getCurrentPages()
	if (pages.length) currentPage = pages[pages.length - 1]
	return currentPage.route
}

// 拼接 【当前页面url+参数】 作为backUrl
export const packBackUrl = _params => {
	const url = getCurrentPageUrl()
	const params = _params || getParams() || {}
	let paramsStr = ''
	for (let key in params) {
		paramsStr = paramsStr + key + '=' + params[key] + '&'
	}
	return `backUrl=${url}&${paramsStr}`
}

/**
 * 组装地址：解析url参数中的backUrl，作为接下来要跳转的页面地址，并且携带url中的其他参数
 * @param {*} defaultUrl
 * @returns
 */
export const parseBackUrl = defaultUrl => {
	let params = getParams() || {}
	if (!params.backUrl) return defaultUrl

	let paramsStr = ''
	for (let key in params) {
		key !== 'backUrl' && (paramsStr = paramsStr + key + '=' + params[key] + '&')
	}
	return `/${params.backUrl}?${paramsStr}`
}

// 复制文字
export const copyText = text => {
	text &&
		wx.setClipboardData({
			data: text
		})
}

// 处理时间戳-xxxx-yy-dd
export const getData = (_time = +new Date()) => {
	let date = new Date(_time + 8 * 3600 * 1000)
	return date.toJSON().substr(0, 19).replace('T', ' ').split(' ')[0]
}

// 判断日期是否是今天
export const isToday = data => {
	const date = new Date(data || null)
	const current = new Date()

	if (current.getFullYear() == date.getFullYear() && current.getMonth() == date.getMonth() && current.getDate() == date.getDate()) {
		return true
	}

	return false
}

// 微信版本号比较
export const compareVersion = (v1, v2) => {
	v1 = v1.split('.')
	v2 = v2.split('.')
	const len = Math.max(v1.length, v2.length)

	while (v1.length < len) {
		v1.push('0')
	}
	while (v2.length < len) {
		v2.push('0')
	}

	for (let i = 0; i < len; i++) {
		const num1 = parseInt(v1[i])
		const num2 = parseInt(v2[i])

		if (num1 > num2) {
			return 1
		} else if (num1 < num2) {
			return -1
		}
	}

	return 0
}
