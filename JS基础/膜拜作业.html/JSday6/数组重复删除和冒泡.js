// var p = [1,2,3,2,3,4,3,4,5,2,2,2]
// for (var i = 0; i < p.length-1; i++) {
//     var item = p[i]
//     for (var k = i+1; k < p.length; k++) {
//         if(p[k]===item){
//             // p.splice(k,1)
//             // k--
//             p[k]=null
//         }  
//     }
// }
// console.log(p)

var p = [1,2,3,2,3,4,3,4,5,2,2,2]
var obj = {}
for (var i = 0; i < p.length; i++) {
    var dde = p[i]
    obj[dde]= dde
    if(obj[p[i+1]] !== undefined){
        p.splice(i+1,1)
        i--
    }
}
console.log(p)

// var arr= [1,1,2,2,1,1,2,2,3,3,3,1]
// var result = obj_unique(arr)
// function obj_unique(n){
//     var kelong = n.slice()
//     var obj = {}
//     for (var i = 0; i < kelong.length; i++) {
//         var cur = kelong[i]
//         if(obj[cur]===undefined){
//             obj[cur]=true
           
//         }
//         else{
//             kelong.splice(i,1)
//             i--
//             kelong[i]=kelong[kelong.length-1]
//             kelong.length--
//             i--
//         }
//     }
//     return kelong
// }
// console.log(result)


// ary1=[1,7,2,4]
// [ary1[0],ary1[2]]=[ary1[2],ary1[0]]
// console.log(ary1)

//冒泡排序
// var ary = [1,10,9,8]
// for (var i = 0; i < ary.length-1; i++) {
//     for(var j =0;j<ary.length-i-1;j++){
//         if(ary[j] >ary[j + 1]){
//             var temp = ary[j]
//             ary[j]=ary[j + 1]
//             ary[j + 1]=temp
//         }
//     }
// }
// console.log(ary)

// var ary = [1,10,9,8]
// for (var i = 0; i < ary.length; i++) {
//     var cun =ary[i]
//     for (var j = i+1; j < ary.length; j++) {
//         if(cun>ary[j]){
//             var p = ary[j]
//             ary[j]=ary[i]
//             ary[i]=p
//         }
//     }
// }
// console.log(ary)