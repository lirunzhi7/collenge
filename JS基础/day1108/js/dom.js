function getDescendant(selector, arr) {
    // 判断selector是不是一个字符串，如果不是默认是DOM
    var dom = null
    var result = arr ? arr : []
    if (typeof selector === 'string') {
        dom = document.querySelector(selector)
    } else {
        dom = selector
    }
    // 获取DOM 然后获取children
    var child = dom.children
    // 循环children 判断cur里面有没有children
    for (var i = 0; i < child.length; i++) {
        var cur = child[i]
        result.push(cur)
        if (cur.children && cur.children.length > 0) {
            getDescendant(cur, result)
        }
    }
    return result
}

// console.log(getDescendant('#hey'));

// [p,span,span,span,span,span,span]

var arr = [1, [2, [3, 4]],5] // [1,2,3,4,5]
function flat(a, res) {
    // var result = res ? res : []
    var result = null
    if (res === undefined) {
        result = []
    } else {
        result = res
    }
    // a = [2, [3, 4]]
    for (var i = 0; i < a.length; i++) {
        var cur = a[i]
        if (cur instanceof Array) {
            flat(cur, result) // [2, [3, 4]]
        } else {
            result.push(cur)// [1,5]
        }
    }
    return result
}
// console.log(flat(arr));

var arr = [1, [2, [3, 4]],5]

function fn1(a) { // 队列
    var result = []
    while (a.length) {
        var cur = a.shift()
        if (cur instanceof Array) {
            a = a.concat(cur)
        } else {
            result.push(cur)
        }
    }
    return result
}
// console.log(fn1(arr));


function getElementChild(selector){
    var result = []
    var dom = document.querySelector(selector)
    var childNodes = dom.childNodes
    for (var i = 0; i < childNodes.length; i++) {
        var cur = childNodes[i]
        if (cur.nodeType === 1) {
            // 如果节点的nodetype为1表示是一个元素节点
            result.push(cur)
        }
    }
    return result
}
// 执行这个方法拿到所有的子元素节点 
// 不可以使用children 只能用childNodes
console.log(getElementChild('#hey'));







