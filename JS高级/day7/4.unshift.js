//方法一
// Array.prototype.un1=function(){
//     for (var i = (this.length-1)+(arguments.length);i>=0;i--) {
//         if(i>=arguments.length){
//             this[i]=this[i-(arguments.length)]
//         }
//         else if(i<arguments.length && i>0){
//             this[i]=arguments[i]
//         } 
//     }
//     return this.length
// }
// var a1 = [4,5,6]
// console.log(a1.un1(1,2,3))

//方法二(问题：1.this不可以当做变量卡住了2.map循环的时候里面的this是cur)最后解决完实现
Array.prototype.un2=function(){
     var cur =[...arguments,...this]
     var that = this
     cur.map(function(item,index){
       that[index]=item
     })  
     return that.length
}
var a2 = [4,5,6]
console.log(a2.un2(1,2,3))

