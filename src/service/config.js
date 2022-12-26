// 当前的接口联调环境
export const isDev = process.env.NODE_ENV === 'development'

let baseURL = isDev ? 'xxxxx':'xxxxx'

export const BASE_URL = baseURL
export const CDN_URL = '' // CDN资源地址
export const PREFIX_URL = '/api/xxxx/xxxx'

// 状态码
export const ServerCode = {
	SUCCESS: 200,
	CONTINUE: 400,
	WRONG_REQUEST: 402,
	FORBIDDEN: 403,
	WRONG_URL: 404,
	NO_LOGIN: 406,
	TIME_OUT: 408,
	WRONG_AUTOSAVE: 411,
	WRONG_SERVER: 500,
	WRONG_REALIZE: 501,
	WRONG_GATEWAY: 502,
	BAD_SERVER: 503,
	GATEWAY_TIME_OUT: 504,
	WRONG_VERSION: 505
}

export const ServerCodeMap = {
	[ServerCode.SUCCESS]: '成功',
	[ServerCode.CONTINUE]: '服务器内部错误',
	[ServerCode.WRONG_REQUEST]: '请求出错',
	[ServerCode.FORBIDDEN]: '拒绝访问',
	[ServerCode.WRONG_URL]: '请求地址出错',
	[ServerCode.NO_LOGIN]: '未登录',
	[ServerCode.TIME_OUT]: '请求超时',
	[ServerCode.WRONG_SERVER]: '服务器内部错误',
	[ServerCode.WRONG_REALIZE]: '服务未实现',
	[ServerCode.WRONG_GATEWAY]: '网关错误',
	[ServerCode.BAD_SERVER]: '服务不可用',
	[ServerCode.GATEWAY_TIME_OUT]: '网关超时',
	[ServerCode.WRONG_VERSION]: 'HTTP版本不受支持'
}
