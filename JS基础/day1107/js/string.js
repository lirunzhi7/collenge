// '1882-8-20 17:23' => 1882年08月20日 17时23分
// '1882-12-20 17:23' => 1882年12月20日 17时23分

function addZero(n) {
    // return n.length > 1 ? n : 0 + n
    if (n.length > 1) {
        return n
    } else {
        return 0 + n
    }
}

function date(str) { // '1882-8-20 17:23'
    var result = ''
    // str 用空格分割 1882-8-20  17:23
    var strArr = str.split(' ') // [1882-8-20, 17:23]
    // 1882-8-20用-分割 
    var years = strArr[0].split('-') // '1882-8-20'.split('-')
    // [1882, 8, 20]
     // 17:23 用:分割
    var days = strArr[1].split(':') // 17:23.split(':')
    // [17, 23]
    // addZero(years[1]) => addZero('1')
    result = years[0] + '年' + addZero(years[1]) + '月' 
    + addZero(years[2]) + '日 ' + 
    days[0] + '时' + days[1] +'分'
    return result
}


// www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu#hash
function query(url) {
    var obj = {}
    var queryStr = url.split('?')[1].split('#')[0]
    var itemAll = queryStr.split('&')
    //["ie=utf-8", "f=8", "rsv_bp=0", "rsv_idx=1", "tn=baidu"]
    for (var i = 0; i < itemAll.length; i++) {
        var itemArr = itemAll[i].split('=') // [ie, utf-8]
        obj[itemArr[0]] = itemArr[1]
    }
    // itemAll.forEach(function(item) {
    //     var itemArr = item.split('=')// [ie, utf-8]
    //     obj[itemArr[0]] = itemArr[1]
    // })
    return obj
}
var result = query('www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu#hash')



