var p = document.getElementById('no')
// var Q = p.getElementsByTagName('li')
var t = p.getElementsByClassName('news')
// for(var i = 0; i<Q.length; i+=2){
//     Q[i].style.backgroundColor='yellow'
// }
// t[1].style.color='red'
var color =['yellow','green']
for(var i = 0;i< t.length;i++ ){
    t[i].style.backgroundColor=color[i%2]
}
    