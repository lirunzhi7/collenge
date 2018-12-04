// var q = document.getElementById('hey')
// var box = q.getElementsByTagName('p')
// box[0].style.backgroundColor='red'
// console.log(box)

var classHtml = document.getElementsByClassName('news')
// for(var i = 0; i<classHtml.length; i++){
//     console.log(classHtml[i])
//     if(i%2){
//         classHtml[i].style.backgroundColor='red'
//     }
//     else{
//         classHtml[i].style.backgroundColor='green'
//     }
// }
// for(var i = 0; i<classHtml.length; i+=2){
//     console.log(classHtml[i])
//     classHtml[i].style.backgroundColor='red'
// }
var color = ['yellow','green']
for (var i = 0; i<classHtml.length; i++){
    classHtml[i].style.background = color[i%2]
}