import { get, post, put } from './tool'
import { PREFIX_URL } from './config'

export const getList = data => get({ url: PREFIX_URL + '/list', data });
export const onSign = data => post({ url: PREFIX_URL + '/sign', data });
