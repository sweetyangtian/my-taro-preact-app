import Taro from '@tarojs/taro'

// ćšć±ćé
const globalData = {
	isIphoneX: false,
	list: [],
}

export function setGlobalData(key, val) {
	globalData[key] = val
	if (key === 'list') Taro.eventCenter.trigger('CHANGE_GLOBAL_LIST')
}

export function getGlobalData(key) {
	return globalData[key]
}
