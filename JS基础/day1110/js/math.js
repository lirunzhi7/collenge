var arr = [1,2,3,4,5,6,10,7]
var max = arr[0]
for (var i = 1; i < arr.length; i++) {
    var cur = arr[i]
    if (cur > max) {
        max = cur
    }
}

function vaildate() {
    var result = ''
    str = 'zxcvbnmasdfghjklqwertyuiop1234567890ZXCVBNMASDFGHJKLQWERTYUIOP'
    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random()*62)
        var cur = str[index]
        if (!result.includes(cur)) {
            result += cur
        } else {
            i--
        }
    }
    return result
}
// console.log(vaildate());

