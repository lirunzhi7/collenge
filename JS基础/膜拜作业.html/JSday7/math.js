
// var str ='1882-8-20 17:23'
// function date(){
//     var strarr=str.split(' ')
//     var years = strarr[0].split('-')
//     var times = strarr[1].split(':')
//     result=years[0]+'年'+years[1]+'月'+years[2]+'日'+
//     times[0]+'时'+ times[1]+'分'
//     return result
// }
 
// console.log(date('1882-8-20 17:23'))




// var str = 'www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu'
// function fn(str){
//         var qq = str.split('?')
//         var body=qq[1]
//         var end = body.split('&')
//         var obj = {}
//         for (var i = 0; i < end.length; i++) {
//         var pen = end[i].split('=')
//         obj[pen[0]]=pen[1]
//     }
//     return obj
// }
// console.log(fn(str))


// var pp = 0
// function add(){
//     for (var i = 0; i < arguments.length; i++) {
//     if( typeof arguments[i]==='number' || typeof arguments[i]==='string' ){
//         isNaN(arguments[i]) ? null : pp += Number(arguments[i])
//     }
//     }
//     return pp
// }
// console.log(add(1,2,3,4,'11','11hellow',true,[1]))


//验证码有重复

function fn(){
    var result = ''
    var str = '1234657890'+'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ'
    var len =str.length // 62
    for (var i = 0; i < 4; i++) {
        //var index = Math.random()*len
        var index = Math.floor(Math.random()*len)
        var cur = str[index]
        result += cur
    }
    return result
}
console.log(fn())

//验证码无重复
function fn1(){
    var result = ''
    var str = '1234657890'+'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ'
    var len =str.length // 62
    for (var i = 0; i < 4; i++) {
        //var index = Math.random()*len
        var index = Math.floor(Math.random()*len)
        var cur = str [index]
        if(result.indexOf(cur)>-1){
            i--
        }
        else{
            result += cur
        }
    }
    return result
}
console.log(fn1())