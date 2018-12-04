// 验证码有重复的
function fn() {
    var str = '1234567890'
    +'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    var result = ''
    var len = str.length // 62 [0 - 61]
    for (var i = 0; i < 4; i++) {
        // var index = Math.random()*len [0, 62)
        var index = Math.floor(Math.random()*len)
        var cur = str.charAt(index)
        result += cur
    }
    return result
}


function fn1() { // 没有重复项的
    var str = '1234567890'
    +'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    var result = ''
    var len = str.length // 62 [0 - 61]
    for (var i = 0; i < 4; i++) {
        // var index = Math.random()*len [0, 62)
        var index = Math.floor(Math.random()*len)
        var cur = str.charAt(index)
        if (result.indexOf(cur) > -1){
            i-- // 如果有重复的 这次循环无效 所以需要i--
        } else {
            result += cur
        }
    }
    return result
} 

function fn2() { // while循环版本 没有重复项的
    var str = '1234567890'
    +'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    var result = ''
    var len = str.length // 62 [0 - 61]
    while(result.length < 4){
        var index = Math.floor(Math.random()*len)
        var cur = str.charAt(index)
        if (result.indexOf(cur) === -1){
            result += cur
        }
    }
    return result
} 
console.log(fn2());

