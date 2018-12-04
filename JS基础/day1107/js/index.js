function add() {
    // 只要number 和string类型 和Boolean类型
    // 只用一个if 条件1 || 条件2
    // arguments
    var total = 0
    var type = ['number', 'string', 'boolean']
    for (var i = 0; i < arguments.length; i++) {
        var cur = arguments[i]
        // if (typeof cur === 'number' || typeof cur === 'string' || typeof cur === 'boolean')
        if (type.indexOf(typeof cur) > -1) {
            cur = +cur
            isNaN(cur) ? null : total += cur
        }
    }
    return total
}

var result = add(1,2,3,4,'11','11hello',true,[1]) //21
console.log(result);
