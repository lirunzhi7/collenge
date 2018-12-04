

// var data
// var xhr = new XMLHttpRequest()//第一步建立一个实例
// xhr.open('get','地址',false)//打开一个文件路径，读取数据
// xhr.onreadystatechange = function(){
//     if(xhr.readyState==4&&xhr.status===200){
//         data=xhr.responseText
//     }
// }
// xhr.send()

//18-65之间的任意一个数；
// var reg = /^(1[89])|([2-5]\d)|(6[0-5])$/
// console.log(reg.test(50))
// var reg1 = /^[\d]$/
// console.log(reg1.test(91))
//[object AAA]
// var reg = /^\[object .+\]$/
// console.log(reg.test('[object AAA]'))


// var reg = /^(188|199)$/
// console.log(reg.test('199'))

// var reg = /^\d{17}(\d|X)$/
// console.log(reg.test('371322199206295810'))

// var reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/
// console.log(reg.exec('371322199206295810'))


//写16-70之间的任意一个数
// var reg = /^(1[6-9])|([2-6]\d)|70$/
// console.log(reg.test(70))

// //身份证号码获取
// var reg1 = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/
// console.log(reg1.exec('371322199206295810'))

// var reg2 = /^([a-z])([a-z])\2\1$/
// console.log(reg2.test('oppo'))
// var reg3 = /^(18|19)$/
// console.log(reg3.test(19))
// var reg4 = /^[^a-z]$/
// console.log(reg4.test('m'))

//用正则验证是否为有效数字的方法

// var reg = /^([+-]?)(\d|([1-9]\d+))(\.\d+)$/
// console.log(reg.test(-10.5))
// var reg = /^(\d)|(\.\d+)$/
// console.log(reg.test(0.1))

//用正则方法验证是否为有效的邮箱
// var reg = /^\w+([-.]\w+)*@([a-zA-Z0-9]+)([-.][a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+)$/
// console.log(reg.test('342691447@qq.com'))

// var str = 'haohao2019xuexi2018tiantian2020xiangshang2021'
// var reg = /\d+/g
// RegExp.prototype.myskll=function(str){
//     var cur = []
//     var arr = this.exec(str)
//     while(arr){
//         cur.push(arr[0])
//         var arr = this.exec(str)
//     }
//     return cur
// }
// console.log(reg.myskll(str))


// //方法一
// console.log(str.match(reg))

// //方法二
// RegExp.prototype.myall=function(){
//     var arr = []
//     var newarr = this.exec(str)
//     if(+(this.flags)===0){
//         return newarr
//     }   
//     while(newarr){
//         arr.push(newarr[0])
//         var newarr = this.exec(str)
//     }
//     return arr
// }
// console.log(reg.myall(str))


//分组捕获
// var str = 'haohao{2019}xuexi{2018}tiantian{2020}xiangshang{2021}'

// var reg = /\{(\d+)\}/g
// console.log(str.match(reg))


var str = 'haohao2019xuexi2018'
var reg = /\d+/g
console.log(reg.lastIndex)
console.log(reg.exec(str))
console.log(reg.lastIndex)
console.log(reg.test(str))












