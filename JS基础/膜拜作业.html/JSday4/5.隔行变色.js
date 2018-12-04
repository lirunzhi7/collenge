var p = document.getElementById('box')
var toto = p.getElementsByTagName('li')
var b = ['yellow','blue','green']
for(var i = 0; i<toto.length; i++){
    toto[i].style.backgroundColor=b[i%3]
}
    
