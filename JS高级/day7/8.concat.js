
Array.prototype.con=function(){
    for (var i = 0; i < arguments.length; i++) {
        this[this.length]=arguments[i]
    }
    return this
}
var cur = [1,2,3]

console.log(cur.con(true,10,[11],{20:20}))

