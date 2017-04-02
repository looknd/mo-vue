

/**
 * 将（日期）字符串转换为真实日期
 * @param  {*} input 
 * @return {Object} 
 */
const convertDate = input => {
	if (input instanceof Date) return input
	if (!isNaN(input)) return new Date(parseInt(input))
	if (/^\d+$/.test(input)) return new Date(parseInt(input, 10))
	input = (input || '').trim()
	input = input.replace(/\.\d+/, '')
		.replace(/-/, '/').replace(/-/, '/')
		.replace(/T/, ' ').replace(/Z/, ' UTC')
		.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2')
	return new Date(input)
}


/**
 * 将日期转换为字典对象
 * @param  {*} date 
 * @return {Object} 
 */
const dateToMap = date => {
	date = convertDate(date)
	return {
		"y": date.getFullYear(),
		"M": date.getMonth() + 1, //月份
		"d": date.getDate(), //日
		"h": date.getHours(), //小时
		"m": date.getMinutes(), //分
		"s": date.getSeconds(), //秒
		"q": Math.floor((date.getMonth() + 3) / 3), //季度
		"S": date.getMilliseconds() //毫秒
	}
}

/**
 * 格式化日期
 * @param  {*} date  
 * @return {String}
 */
const formatDate = (date, format = 'yy-MM-dd') => {
	const map = dateToMap(date)
	format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
		let v = map[t]
		if (v != undefined) {
			v = v.toString()
			if (t != 'y' && all.length > 1) {
				v = '0' + v
				v = v.substr(v.length - 2)
			} else if (t == 'y' && all.length === 1) {
				v = v.substr(2)
			}
			return v
		}
		return all
	})
	return format
}

export {convertDate, dateToMap, formatDate}