
var str1 = '1887-8-9 19:30:21'
var str2 = '1887/12/9 19:30:21'
function addZero(n) {
    n += ''
    return n.length > 1 ? n : 0 + n
}
function date(str) {
    // 先确定分割符 有没有- 有没有/
    var sepe = str.includes('-') ? '-' : '/'
    var strArr = str.split(' ') // ['1887/8/9', '19:30:21']
    var years = strArr[0].split(sepe) // [1887, 8, 9]
    var days = strArr[1].split(':') // [19, 30, 21]
    return addZero(years[1]) + '月' + addZero(years[2]) + '日 ' 
    + days[0] + '时' + days[1] + '分'
}
// console.log(date(str1));
// console.log(date(str2));
 // 08月09日 19时30分
 // 08月09日 19时30分


var str = 
'www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu#hash'

function query(url){
    var obj = {}
    var queryStr = url.split('?')[1].split('#',1)[0]
    // ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu
    var queryStrArr = queryStr.split('&')
    // [ie=utf-8,f=8,rsv_bp=1,rsv_idx=1,tn=baidu]
    queryStrArr.forEach(function(item){
        var itemArr = item.split('=') // [ie, utf-8]
        obj[itemArr[0]] = itemArr[1]
    })
    return obj
}
console.log(query(str));
// {
//     ie: 'utf-8',
//     f: '8',
//     rsv_bp: '1',
//     rsv_idx: '1',
//     tn: 'badiu'
// }
