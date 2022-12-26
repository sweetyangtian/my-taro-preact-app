import { Component } from 'react'
import { setGlobalData } from '@/utils'
import '@/assets/css/index.scss'

import './app.scss'

class App extends Component {
	componentWillMount() {
		this.updateVersion()

		const systemInfo = Taro.getSystemInfoSync()
		const { safeArea, screenHeight } = systemInfo || {}
		const { bottom } = safeArea || {}
		if (screenHeight - bottom === 34) {
			setGlobalData('isIphoneX', true)
		}
	}
	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	// 线上版本更新
	updateVersion = () => {
		if (wx.canIUse('getUpdateManager')) {
			// 创建 UpdateManager 实例
			const updateManager = wx.getUpdateManager()

			// 检测版本是否有更新
			updateManager.onCheckForUpdate(function (res) {
				// 请求完新版本信息的回调
				if (res.hasUpdate) {
					// 监听小程序有版本更新事件
					updateManager.onUpdateReady(function () {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启 （此处进行了自动更新操作，无需用户手动确认）
						updateManager.applyUpdate()
					})

					updateManager.onUpdateFailed(function () {
						// 新版本下载失败
						wx.showModal({
							title: '检测到新版本',
							content: '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开哦~'
						})
					})
				}
			})
		} else {
			wx.showModal({
				title: '溫馨提示',
				content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
			})
		}
	}

	render() {
		return this.props.children
	}
}

export default App
