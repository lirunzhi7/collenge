
Array.prototype.rev=function(){
    var cur = []
    for (var i =this.length-1; i >= 0; i--) {
        cur[this.length-1-i]=this[i]
    }
    return cur
}
var a = [1,2,3]
console.log(a.rev())