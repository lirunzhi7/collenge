### 数组常用方法
`改变原数组的 7个`
用法  返回值
> 1. push
arr.push(a,b)
在数组(arr)的末尾添加任意项(a,b),返回值是数组的长度(length)
> 2. pop
arr.pop()
删除数组(arr)的最后一项，返回值是删除的这一项
> 3. unshift
arr.unshift(a,b)
在数组(arr)的前面添加任意项(a,b),返回值是数组的长度(length)
> 4. shift
arr.shift()
删除数组第一项，返回值是删除的这一项
> 5. splice
arr.splice(start, deletecount, ...item)
从索引start开始 删除deletecount这么多项，在索引start处(包括start)添加任意项
arr.splice(start, deletecount)
从索引start开始 删除deletecount这么多项
arr.splice(start)
从索引start开始删除到末尾
start可以为负数，表示从后开始数，比如-1表示最后一项，-2表示倒数第二项
所有的操作都包括start这一项
splice的返回结果 是一个新数组里面是删除的项
```javascript
var arr = ['a', 'b', 'c']
arr.splice(2, 1, 10, 20) 
// => [c] // 运行结果
// arr = [a,b,10,20]
```
6. sort
arr.sort()
按照升序的方式排序 只能排序0-9
arr.sort(function(a, b) {return a - b})
排序arr 按照升序方式 可以排序10以上的数字
arr.sort(function(a,b){return b - a})
降序方式排序
7. reverse
arr.reverse()
颠倒arr的顺序
[1, 'a', 2, 'b'].reverse() => ['b', 2, 'a', 1]

`不改变原数组的方法 6个`
> 1. indexOf
arr.indexOf(searchElement, fromIndex)
从fromIndex(是索引)处往后开始查找searchElement，返回searchElement所在的索引(第一次出现)。fromIndex默认是0，如果没找到searchElement返回-1
> 2. lastIndexOf
arr.lastIndexOf(searchElement, fromIndex)
从索引(fromIndex)往前查找searchElement，返回searchElement所在的索引(第一次出现), fromIndex默认是arr.length-1,如果没找到返回-1
> 3. slice
arr.slice(?start,?end)
从索引start(包括)开始截取到索引end(不包括)
返回一个新数组，里面是截取到的内容
arr.slice(start)
从索引start开始一直截取到末尾
arr.slice()
从索引0开始截取到末尾，这个操作就是复制了一个数组
> 4. concat
arr.concat(...items)
合并数组 将...items合并到arr里面
```javascript
var arr = ['a', 'b', 'c']
arr.concat([1,2,3], 'hello') // => ['a','b','c',1,2,3,'hello']
```
> 5. join
arr.join(?seperator)
将数组转成一个字符串，数组里面的每一项用seperator连接
['a', 'b', 'c'].join() => 'a,b,c'
['a', 'b', 'c'].join('') => 'abc'
['a', 'b', 'c'].join('+') => 'a+b+c'
> 6. toString
将数组转成字符串
['a', 'b', 'c'].toString() => 'a,b,c'

### 删除数组最后一项
arr.length--
arr.splice(clonArr.length-1, 1)
arr.pop()

### 去重和排序 
详见js/bubble_sort.js, js/unique.js

### 递归
函数自己调用自己
栈的调用

console.dir([])
搜索
`forEach MDN`