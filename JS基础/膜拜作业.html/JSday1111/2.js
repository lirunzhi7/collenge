var p = document.getElementById('box')
var lis =p.getElementsByTagName('li')

var cur = ['yellow','blue','red']
for (var i = 0; i < lis.length; i++) {
    lis[i].style.background=cur[i%3]
}


var arr = [1,1,2,2,1,1,2,2,3,3,3,1]
//删除重复项
var obj = {}
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i]
    if(obj[cur]===undefined){
        obj[cur]=true
    }
    else{
        arr.splice(i,1)
        i--
    }
}
console.log(arr)

var arr = [1, 9, 10, 20, 7, 2, 8]

for (var i = 0; i < arr.length; i++) {
    var qq =arr[i]
    if(qq>arr[i+1]){
        var p = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=p
    }
}
console.log(arr)


var num = 0
function fn () {
    console.log('hello');
    num++
    if (num < 1000) fn();
}
fn ()

function fn(n) {
    var num = n
   for (var i = 1; i < n; i++) {
        num += i
   }
   return num
}
console.log(fn(10))