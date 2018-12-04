review

### 字符串常用方法
cosole.dir(String.prototype)
pos => position 位置
1. charAt
str.charAt(pos) str[pos]
通过位置(索引)查找内容
```javascript
str = 'hello'
str.charAt(1) //=> 'e'
str[1] //=> 'e'
```

2. charCodeAt
str.charCodeAt(index)
查找index所在内容的Unicode码

3. indexOf
str.indexOf(searchString, position)
和数组一样

4. lastIndexOf
str.lastIndexOf(searchString, position)
和数组一样

5. slice
str.slice(?start, ?end)
和数组一样

6. subStr
str.subStr(from, ?length)
从索引(from 包括from)截取length个字符
```javascript
str = 'hello'
str.subStr(1, 3) // 'ell'
```

7. subString
str.subString(start, ?end)
从索引start(包括)截取到索引end(不包括)
和slice区别是，slice可以用负数，subString不可以

8. split
str.split(separator, ?limit)
用seperator将字符串分割成数组, 数组的长度不能超过limit
```javascript
str = 'a+b+c+d'
str.split('+') // ["a", "b", "c", "d"]
str.split('-') // ['a+b+c+d']
str.split('') // ["a", "+", "b", "+", "c", "+", "d"]
str.split() // ['a+b+c+d']
```
9. replace
str.replace(searchValue, replaceValue)
用replaceValue替换str中的第一个searchValue

10. toUpperCase
str.toUpperCase()
将str中的所有英文字母转成大写

11. toLowerCase
str.toLowerCase()
将str中的所有英文字母转成小写


### 时间格式化
'1882-8-20 17:23' => 1882年08月20日 17时23分
'1882-12-20 17:23' => 1882年12月20日 17时23分

### query 查询字符串

### == 数据转换

### &&  ||

### Math方法