const UA = window.navigator.userAgent.toLowerCase()

/**
 * 微信
 * @type {Boolean}
 */
const isWeChat = !!(UA.match(/MicroMessenger/i) == 'micromessenger')

/**
 * 手机
 * @type {Boolean}
 */
const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(UA)


/**
 * IE
 * @type {Boolean}
 */
const isIe = UA.match(/MSIE\s([\d.]+)/i) || UA.match(/Trident\/.+?rv:(([\d.]+))/i)

/**
 * Edge
 * @type {Boolean}
 */
const isEdge = UA.match(/Edge\/([\d.]+)/i)

/**
 * Chrome
 * @type {Boolean}
 */
const isChrome = !!(/Chrome\/([\d.]+)/i).test(UA) || !!/CriOS\/([\d.]+)/i.test(UA)

/**
 * WebView
 * @type {Boolean}
 */
const isWebView = !isChrome && !!/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(UA)

/**
 * Safari
 * @type {Boolean}
 */
const isSafari = isWebView || !!/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/i.test(UA)



export {
	isWeChat,
	isMobile,
	isIe,
	isEdge,
	isChrome,
	isSafari
}