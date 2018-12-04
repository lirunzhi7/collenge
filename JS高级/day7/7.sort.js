

//问题：1.没有考虑到参数为函数时的情况；2.当数组内的数大于10的时候；3.实现从大到小情况
Array.prototype.so=function(){
    var p = 0
    while(p<this.length){
    for (var i = 0; i < this.length; i++) {
        if(this[i]>this[i+1]){
            var cur = this[i]
            this[i]=this[i+1]
            this[i+1]=cur
        }
    }
    p++ 
    }
    return this
}
var a = [11,20,9,8,7,6,5,4,3,2,1]
console.log(a.so())