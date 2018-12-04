

Array.prototype.s=function(){
    var cur = this[0]
    for (var i = 0; i < this.length-1
        ; i++){
            this[i]=this[i+1]
    }
    this.length--
    return cur
}
var a = [1,2,3]
console.log(a.s())
console.log(a)
