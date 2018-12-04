
Array.prototype.jo=function(n){
    if(typeof n==='string'){
        var str =''
        for (var i = 0; i < this.length-1; i++) {
             str = str+ this[i] + n   
        }
        str += this[this.length-1]
        return str
    }
    else{
        var str =''
        for (var i = 0; i < this.length; i++) {
            str += this[i]
        }
        return str
    }
}
var a = [1,2,3]
console.log(a.jo())


