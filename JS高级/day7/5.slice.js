
Array.prototype.sl=function(){
    if(arguments.length <= 2){
        if(arguments.length===0){
            return this
        }
        else if(arguments.length===1){
            if(arguments[0]===0){
                return this
            }else if(arguments[0]>0 && arguments[0]<this.length){
                var cur = []
                for (var i =arguments[0]; i < this.length; i++) {
                  cur[i-arguments[0]]=this[i]
                }
                return cur
            }
            else if(arguments[0]<0  &&  Math.abs(arguments[0])<this.length){
                var cur = []
                for (var i = this.length-Math.abs(arguments[0]); i < this.length; i++) {
                    cur[i-(this.length-Math.abs(arguments[0]))]=this[i]
               }
               return cur
            }   
            else{
                var cur = []
                return cur
            }
        }
        else if(arguments.length===2){
            if(arguments[0]>0 && arguments[1]>0){
                var cur = []
                for (var i = arguments[0] ; i < arguments[1]; i++) {
                    cur[i-arguments[0]]=this[i]
                }
                return cur
            }
            else if(arguments[0]<0 && arguments[1]<0){
                var cur = []
                for (var i = this.length-Math.abs(arguments[0]); i < this.length-Math.abs(arguments[1]); i++) {
                    cur[i-(this.length-Math.abs(arguments[0]))]=this[i]
                }
                return cur
            }
            else{
                var cur = []
                return cur
            }
        }
    }
}
var ary = [1,2,3,4,5,6]
console.log(ary.sl(-4,-1))
console.log(ary)