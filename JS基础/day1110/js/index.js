arr = ['a', 'b', 'c', 'ab', 'ahello']

// arr.forEach(function(item,index,array){ //arr[i]  i  arr
//     console.log(item, index, array)
// })

var result = arr.filter(function(item, index, array){
    var flag = item.indexOf('a') !== -1
    return flag 
    // 通过这个flag判断当前item是不是我想要的
    // 如果flag是true，表示当前的item是我想要的
    // 如果flag为false，表示当前的item不是我想要的
}) // [a, ab, ahello]
console.log(result, arr)
 