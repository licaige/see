/**
 * Created by jiachenpan on 16/11/18.
 */
import { MessageBox } from 'element-ui'
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export const noop = () => {}

// 获取数组最后一位元素
export const arr_last = arr => {
  const _arr = Array.from(arr)

  return _arr[_arr.length - 1]
}
// 创建区间数组
export const range_arr = (start, end) => {
  const len = end - start + 1
  let step = start - 1

  if (len <= 0) return []

  return Array.apply(null, { length: Math.abs(len) })
    .map(() => ++step)
}

/**
 * 删除弹框   版本一
 */
// 删除弹窗的配置
const _delete_dialog_config = {
  lockScroll: false, confirmButtonText: '确定', cancelButtonText: '取消',
  type: 'warning', customClass: 'delete_dialog'
}

// 删除弹窗
export const delete_message = function(message) {
  return this.$confirm(message || '此操作将永久删除该文件，是否继续？', '提示', { ..._delete_dialog_config })
}

/**
 * 删除弹框   版本二
 */
export async function confirm_message(message, title = '提示', type = 'warning') {
  try {
    await MessageBox.confirm(message, title, { confirmButtonText: '确定', cancelButtonText: '取消', type })

    return true
  } catch (err) {
    return false
  }
}

// 成功返回操作成功，失败返回操作失败

export const operation_message = function(status, callback, errorMsg, successfulMsg) {
  if (status) {
    this.$message({ type: 'success', message: !successfulMsg ? '操作成功' : successfulMsg })
    callback && callback()
  } else {
    this.$message({ type: 'error', message: !errorMsg ? '操作失败' : errorMsg })
  }
}

// 类型判断
const _isType = type => target => toString.call(target) === '[object ' + type + ']'

export const is_array = _isType('Array')
export const is_number = _isType('Number')
export const is_string = _isType('String')
export const is_object = _isType('Object')
/* eslint-disable */
export const is_undefined = something => something === void 0

// 生成随机颜色
export const random_color = (index) => {
  const _color = [
    '#f9c97f', '#5ecce9', '#fea96c', '#b2e864', '#71e9a4',
    '#64dde8', '#34495e', '#2ecc71', '#3498db', '#bdc3c7'
  ]
  if ( ! is_undefined(index)) {
    let _index = index

    if (index > 9) {
      let temp = index + ''

      _index = Number(arr_last(temp))
    }

    return _color[_index]
  }

  return _color[Math.ceil(Math.random() * 10) - 1]
}

// 16 进制颜色转 rgb
const _color_reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

export const hex2rgb = hex_str => {
  let sColor = hex_str.toLowerCase()

  if (sColor && _color_reg.test(sColor)){
    if (sColor.length === 4){
      let sColorNew = '#'

      for (let i = 1; i < 4; i += 1)
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))

      sColor = sColorNew
    }
    const sColorChange = []

    for (let i = 1; i < 7; i += 2)
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16))

    return sColorChange
  }
  return [0, 0, 0]
}

// 根据数字得到中文
export const get_han_num = (num, strHandler) => {
    let
      _num = parseInt(num),
      han_num = ''
		const
			han_num_arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
			neg_num_han = '负'

		if (isNaN(_num)) {
			console.warn('只支持 -99 ~ 99 范围内的数字!')
			return false
		}

		if (_num < 0) {
			han_num = neg_num_han
			_num = Math.abs(_num)
		}

		if (_num === 0)
			han_num += '零'
		else if (_num > 0 &&_num <= 10)
			han_num += han_num_arr[_num]
		else if (_num > 10 && _num <= 99) {
			const num_arr = String(_num).split('')

			if (_num <= 19)
				num_arr.splice(0, 1, '10')
			else
				num_arr.splice(1, 0, '10')

			num_arr.forEach(function (n, index) {
				const _n = parseInt(n)

				if ( (index === (num_arr.length - 1)) && (_n === 0)) return false
				han_num += han_num_arr[_n]
			})
		}
		else {
			console.warn('只支持 -99 ~ 99 范围内的数字!')
			return false
		}

		return strHandler ? strHandler(han_num) : han_num
  }


Date.prototype.yyyymmdd = function (delimiter) {
  const
    yyyy = this.getFullYear().toString(),
    mm = (this.getMonth() + 1).toString(),
    dd = this.getDate().toString()

  return yyyy + delimiter + (mm[1] ? mm : `0${mm[0]}`)
    + delimiter + (dd[1] ? dd : `0${dd[0]}`)
}
Date.prototype.yymmddhhmm = function (delimiter) {
  const
    yy = this.getFullYear().toString(),
    mm = (this.getMonth() + 1).toString(),
    dd = this.getDate().toString(),
    hh = this.getHours().toString(),
    MM = this.getMinutes().toString(),
    SS = this.getSeconds().toString()

  return yy + delimiter + (mm[1] ? mm : `0${mm[0]}`)
    + delimiter + (dd[1] ? dd : `0${dd[0]}`) + ' '
    + (hh[1] ? hh : `0${hh[0]}`) + ':' + (MM[1] ? MM : `0${MM[0]}`) + ':' + (SS[1] ? SS : `0${SS[0]}`)
}
Date.prototype.hhmmss = function (delimiter) {
  const
  hh = this.getHours().toString(),
  MM = this.getMinutes().toString(),
  SS = this.getSeconds().toString()
  let split = ':'

  if (delimiter) {
    split = delimiter
  }
  return (hh[1] ? hh : `0${hh[0]}`) + split + (MM[1] ? MM : `0${MM[0]}`) + split + (SS[1] ? SS : `0${SS[0]}`)
}
// 日期格式化
export const yyyymmdd = (date_obj, delimiter='-') =>
  (date_obj && date_obj.yyyymmdd) ? date_obj.yyyymmdd(delimiter) : new Date().yyyymmdd(delimiter)

export const yymmddhhmm = (date_obj, delimiter='-') =>
  (date_obj && date_obj.yymmddhhmm) ? date_obj.yymmddhhmm(delimiter) : new Date().yymmddhhmm(delimiter)


// 生成26个大写字母数组
export const create_letter = () =>
  range_arr(65, 90).map(n => String.fromCharCode(n))

// 生成下一个大写字母
export const create_next_letter = letter => {
  const
    _letter   = String(letter).toUpperCase(),
    letters  = create_letter(),
    in_index = letters.indexOf(_letter)

  if (in_index === -1) return console.warn('请输入单个英文字母')
  if (in_index === 25) return 'Z'

  return String.fromCharCode(_letter.charCodeAt() + 1)
}

// 生成错误提示列表
export const error_notify = function (arr) {
  const dom = this.$createElement

  this.$notify({
    title: '错误详情',
    message: dom('div', {class: ''}, (arr || [])
      .map(s => dom('div', {class: 'text_overflow small_font'}, s))),
    duration: 0,
    type: 'error'
  })
}

/**
 * use_iframe_download function - 通过 iframe 下载文件
 *
 * @param  {String} download_path 需下载文件的链接
 * @return {Void}
 */
export const use_iframe_download = download_path => {
  const $iframe = document.createElement('iframe')

  $iframe.style.height = '0px'
  $iframe.style.width = '0px'
  document.body.appendChild($iframe)
  $iframe.setAttribute('src', download_path)

  setTimeout(function () { $iframe.remove() }, 3000)
}

/**
 * el-upload 删除上传列表input-v uid
 * @param vue_dom -> el-upload ref
 */
export const remove_value = vue_dom => {
  if (vue_dom && vue_dom.$el)
    vue_dom.$el.querySelector('input').value =''
}

// unique_has_obj_array 对于对象数组进行去重，去重指标为对象的所有 key
export const unique_has_obj_array = arr => {
  const hash = {}

  return (arr || []).reduce((pre, cur) => {
    // 将对象的所有 key 字典排序并且和 value 拼接成字符串
    const hash_key = (Object.keys(cur || {}).sort() || []).reduce((str, key, index, that) => {
      return  str + String(key) + ':' + String(cur[key]) + (index === that.length - 1 ? '' : '&')
    }, '')

    hash[hash_key] ? '' : hash[hash_key] = true && pre.push(cur)
    return pre
  }, [])
}

/**
 * 数组对象  对对象的某一个属性进行去重
 */
export const unique_obj_property_array = (arr, name) => {
  const hash = {}
  return (arr || []).reduce( (item, next) => {
    hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
    return item;
  }, [])
}

/**
 * uuid function - 生成随机 id 字符串
 *
 * uuid() // "bced0f09-ec67-42cc-b7b3-a498765c4718"
 * @return {String} 随机 id 字符串
 */
export const uuid = () => {
  var i, random
  var result = ''

  for (var i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0
    if (i === 8 || i === 12 || i === 16 || i === 20)
      result += '-'
    result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16)
  }
  return result
}


// 滚动动画
export const scroll_to = (el, from=0, to, duration=500) => {
  if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
              return window.setTimeout(callback, 1000 / 60)
          }
      )
  }
  const
    difference = Math.abs(from - to),
    step = Math.ceil(difference / duration * 50)

  function scroll(start, end, step) {
      if (start === end) return;

      let d = (start + step > end) ? end : start + step

      if (start > end)
          d = (start - step < end) ? end : start - step

      if (el === window)
          window.scrollTo(d, d)
      else
          el.scrollTop = d

      window.requestAnimationFrame(() => scroll(d, end, step))
  }

  scroll(from, to, step)
}
export const from_current_top_scroll_to = (target_top=0, duration=500) => {
  const current_top = document.documentElement.scrollTop || document.body.scrollTop

  scroll_to(window, current_top, target_top, duration)
}

/**
 * safe_get 安全的获取对象值
 * obj = {a: {b: {c: 123}}}
 *
 * safe_get(obj, 'a.b.c') // 123
 * safe_get(obj, 'a.b.d', '我是默认值') // 我是默认值
 *
 * @param   {Object}  目标对象
 * @param   {String}  路径字符串 "a.b.c"
 * @param   {Any}     默认值
 * @return  {Any}     获取到的值
 */
export const safe_get = (targetObj, keyString, defaultValue) => {
  const path = String(keyString).split('.')
  const result = path.reduce((preObj, curPath) => {
    return (preObj !== null && !is_undefined(preObj))
      ? preObj[curPath]
      : preObj
  }, targetObj)

  return is_undefined(result)
    ? (is_undefined(defaultValue) ? result : defaultValue)
    : result
}

/**
 * 深度比较两个对象是否相等
 * @param {*} origin 比较对象
 * @param {*} target 确认比较对象
 */
export const compare = (origin, target) => {
  if (typeof target === 'object') {
      if (typeof origin !== 'object') return false
      for (let key of Object.keys(target))
          if (!compare(origin[key], target[key])) return false
      return true
  } else return origin === target
}

/**
 * 将秒转化成hh:mm:dd格式
 * @param {Number} sec 秒数
 */
export const secTransHHMMSS = (sec) => {
  var hhmmss = ''
  var hour = '00'
  var minute = '00'
  var second = '00'
  var last_second = ''

  if (Number(sec) < 3600) {
      if (sec < 60) {
          second = sec
      }
      else {
          minute = Math.floor(sec/60)
          second = sec - minute*60
      }
  }
  else {
      hour = Math.floor(sec/3600)
      last_second = sec - hour*3600
      if (last_second < 60) {
          second = last_second
      }
      else {
          minute = Math.floor(last_second/60)
          second = last_second - minute*60
      }
  }
  second = second === '00' ? second : second < 10 ? '0' + second : String(second)
  minute = minute === '00' ? minute : minute < 10 ? '0'+ minute : String(minute)
  hour = hour === '00' ? hour : hour < 10 ? '0'+ hour : String(hour)
  hhmmss = hour + ':' + minute + ':' + second
  return hhmmss
}

/**
 * 将hh:mm:dd格式字符串转化为秒数
 * @param {String} hhmmss 形如hh:mm:dd字符串
 */

export const hhmmssTransSec = (hhmmss) => {
  var temp = hhmmss.split(':')
  var hourSec = 0
  var minuteSec = 0
  var secondSec = 0

  if (temp[0][0] !== '0') {
      hourSec = Number(temp[0]) * 3600
  }
  else {
      hourSec = Number(temp[0][1]) * 3600
  }
  if (temp[1][0] !== '0') {
      minuteSec = Number(temp[1]) * 60
  }
  else {
      minuteSec = Number(temp[1][1]) * 60
  }
  if (temp[2][0] !== '0') {
      secondSec = Number(temp[2])
  }
  else {
      secondSec = Number(temp[2][1])
  }
  return hourSec + minuteSec + secondSec
}

/**
 * 将数组截成指定大小并且将截好数组重新组成一个数组
 * @param {*} aArray 原数组
 * @param {*} every_item_length 数组的截取长度
 */
export const recontructArray = (aArray, every_item_length) => {
  const temp = []
  let Temp_item = []

  for (const i in aArray) {
    Temp_item.push(aArray[i])
    if ((Number(i) + 1) % every_item_length === 0) {
      temp.push(Temp_item)
      Temp_item = []
    }
    if ((Number(i) === aArray.length-1) && ((Number(i) + 1) % every_item_length !== 0)) {
      temp.push(Temp_item)
    }
  }
  return temp
}

/**
 * 将过长的字符串改变为段字符串加...
 * @param {String} originalString 原字符
 * @param {Number | String} saveLength 保留段字符长度
 */
export const longStringToShort = (originalString, saveLength) => {
  const shortString = originalString.slice(0, Number(saveLength)-1)

  return Number(saveLength) >= originalString.length ? originalString : shortString + '...'
}

/**
 * 将base64转化成图片
*/
export const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
  while(n--){
      u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], mime === 'image/png' ? filename + '.png' : filename + '.jpg', {type: mime})
}
/**
 * 判断上传文件格式
*/
export const isLegalFileType = (fileSuffix, legalFileArr) => {
  if (Array.isArray(legalFileArr) && legalFileArr.length > 0) {
    return legalFileArr.includes(fileSuffix);
  } else {
    return true;
  }
}
/**
 * 判断上传文件大小
*/
export const isLegalFileSize = (fileSize, limit) => {
  const limits = limit ? Number(limit) : 2;
  return Number(fileSize)/1024/1024 <= limits
}

