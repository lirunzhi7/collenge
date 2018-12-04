### 数组方法
`改变原数组的方法 7个`
var arr = []
1. push
arr.push(...items)
在数组后面添加任意项,返回数组的长度
2. pop
arr.pop()
删除数组最后一项，返回删除的这一项
3. unshift
arr.unshift(...items)
在数组前面添加任意项，返回数组长度
4. shift
arr.shift()
删除数组第一项
5. splice
arr.splice(start, deletecount, ...items)
从索引start(包括)开始删除deletecount项，在start(包括)处添加任意项
arr.splice(start, delerecount)
从索引start(包括)开始删除deletecount项
arr.splice(start)
从索引start(包括)开始删除到末尾
start可以为负数
6. sort
arr.sort()
升序排0-9
arr.sort(funtion(a,b){return a-b})
排序(升序)
arr.sort(funtion(a,b){return b-a})
排序(降序)
7. reverse
arr.reverse
颠倒数组
`不改变原数组的 6个`
arr = []
1. indexOf
arr.indexOf(searchElement, startIndex)
从startIndex开始往后查找searchElement，返回searchElement所在的索引
startIndex默认为0，如果没找到searchElement返回-1
2. lastIndexOf
arr.lastIndexOf(searchElement, startIndex)
从startIndex开始往前查找searchElement，返回searchElement所在的索引
startIndex默认为arr.length-1，如果没找到searchElement返回-1
3. slice
arr.slice(start, end)
从索引start开始截取到索引end,包括start不包括end
返回一个新数组，里面是截取的类容
arr.slice(start)
就是从start截取到最后一项
arr.slice()
就是从索引0开始截取到最后一项，也就是赋值一个数组
4. concat
arr.concat([1,2], 3, 4)
合并数组，返回一个合并后的新数组
5. join
arr.join(seperator)
用seperator将数组内容链接成一个字符串
[1,2,3].join() => '1,2,3'
[1,2,3].join('') => '123'
[1,2,3].join('+') => '1+2+3'
6. toString
arr.toString()
和arr.join()效果一样
7. forEach
arr.forEach(callbackFn)
arr.forEach(function(item,index,arr),?thisArg)
callbackFn会执行arr.length次
每一次执行item,index会是相应的改变
8. includes
arr.includes(searchElement, formIndex)
从索引fromIndex开始往后查找，有没有searchElement。
如果有返回true，如果没有返回false
9. filter
```
arr = ['a', 'b', 'c', 'ab', 'ahello']
var result = arr.filter(function(item, index, array){
    var flag = item.indexOf('a') !== -1
    return flag 
    // 通过这个flag判断当前item是不是我想要的
    // 如果flag是true，表示当前的item是我想要的
    // 如果flag为false，表示当前的item不是我想要的
}) 
// [a, ab, ahello]
```

`删除数组的最后一项`
var arr = [1,2,3,4]
1. arr.pop()
2. arr.splice(arr.length - 1, 1)
arr.splice(-1, 1)
3. arr.length--

`克隆一个数组`
1. arr.slice()
2. arr.concat()

### 去重

### 排序

### 递归

### 字符串方法
var str = 'hello'
1. charAt
str.charAt(position)
通过索引position查找值
2. str.charCodeAt(position)
通过索引position查找值的Unicode码
3. str,indexof(searchElement, fromIndex)
和数组一样
4. str.lastIndexOf(searchElement, ?fromIndex)
和数组一样
5. str.slice(?start, ?end)
从索引start(包括)开始截取到索引end(不包括)
start和end可以为负数
-1代表最后一个
-2代表倒数第二个
6. str.subString(?start, ?end)
和slice用法一样，只不过start和end不能为负数
7. str.subStr(start, length)
从start开始，截取length项
8. str.toUpperCase()
将所有字母转成大写
9. str.toLowerCase()
将所有字母小写
10. split(seperator)
'hello'.split() => ['hello']
'hello'.split('') => ['h','e','l','l','o']
'a+b+c'.split('+') => ['a', 'b', 'c']
通过一个分割符将字符串分割成数组
11. str.replace(searchValue, replacer)
用replacer替换str中的第一个searchValue
12. str.includes(searchElement)  
查询searchElement在str存不存在

### 时间格式化
'1887-8-9 19:30:21'
'1887/8/9 19:30:21'

### query

### Math方法
1. Math.PI 圆周率
2. Math.abs() 绝对值
3. Math,min(...values) 取最小值
4. Math.max(...values) 取最大值
5. Math.floor(x) 向下取整
6. Math.ceil(x) 向上取整
7. Math.random() [0, 1) 之间的随机数
8. Math.round(x) 四舍五入
9. Math.pow(x, y) 求x的y次方
10. Math.sqrt(x) 开平方

### 验证码


### 选项卡

