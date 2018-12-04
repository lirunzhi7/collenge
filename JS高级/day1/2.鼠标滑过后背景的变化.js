var lis =document.getElementsByTagName('li')
for (var i = 0; i < lis.length; i++) {
    if(i%2===0){
        lis[i].style.background='yellow'
        lis[i].ppp='yellow'
    }
    else{
        lis[i].style.background='green'
        lis[i].ppp='green'
    }
}

for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseenter=function(){
        this.style.background='pink'
    }
    lis[i].onmouseleave=function(){
        this.style.background=this.ppp
        
    }
}


// fn()
// function fn(){console.log(1)}
// fn()
// function fn(){console.log(2)}
// fn()
// var fn = 100
// function fn(){console.log(3)}
// fn()
// function fn(){console.log(4)}
// fn()