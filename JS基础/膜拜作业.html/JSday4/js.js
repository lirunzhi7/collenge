var tabBox =document.getElementById('tabBox')
var tabList = tabBox.getElementsByTagName('li')
var divList = tabBox.getElementsByTagName('div')
 
function changeTab(curIndex){
        for(var i = 0;i<tabList.length;i++){
                tabList[i].className=divList[i].className=''
        }
        tabList[curIndex].className=divList[curIndex].className='fun'
}
for(var i = 0;i<tabList.length;i++){
        tabList[i].myIndex=i
        tabList[i].onclick=function(){
                changeTab(this.myIndex)
        }
}


// <!DOCTYPE html></ml>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     <style>
//     *{
//         margin: 0;
//         padding: 0;
//     }
//         #bigbox{
//             margin: 0 auto;
//             text-align: center;
//         }
//         ul{font-size: 0;}
//         ul li{display: inline-block;
//             width: 90px;
//             height: 37px;
//             line-height: 35px;
//             border: 1px solid slategray;
//             font-size: 30px;
//             font-weight: normal;
//             cursor: pointer;
//             position: relative;
//             top: 1px;

//         }
//     #bigbox div{
//             width: 500px;
//             height: 300px;
//             text-align: center;
//             line-height: 298px;
//             border: 1px solid slategrey;
//             margin: 0 auto;
//             display: none;

//         }
//     #bigbox .active{display: inline-block;background-color:lightcoral;border-bottom-color: white;}
//     </style>
// </head>
// <body>
// <div id="bigbox">
//     <ul>
//         <li class="active">中国<>
//         <li>美国<>
//         <li>日本<>
//     </ul>
//     <div class="active">China</div>
//     <div>American</div>
//     <div>Japan</div>
// </div>
// <script>
// var bigbox=document.getElementById('bigbox');
// var lilist=bigbox.getElementsByTagName('li');
// var  divlist=bigbox.getElementsByTagName('div');
// function fn(n) {
//     for (var i = 0; i < lilist.length; i++) {
//         lilist[i].className='';
//         divlist[i].className='';
//     }
//     lilist[n].className='active';
//     divlist[n].className='active';

// }
// lilist[0].onclick=function () {fn(0)
// };
// lilist[1].onclick=function () {fn(1)
// };
// lilist[2].onclick=function () {fn(2)
// };
// for (var i = 0; i < lilist.length; i++) {
//     lilist[i].change = i;
//     lilist[i].onclick = function () {fn(this.change)
//     }
// }








// /*
// for (var i = 0; i <lilist.length; i++) {
//     (function (n) {
//         lilist[n].onclick=function () {
//             fn(n)
//         }
//     })(i)

// }






// for (var i = 0; i < lilist.length; i++) {
//     lilist[i].onclick=function (n) {

//         return function () {
//             fn(n)
//         }
//     }(i)}
// */





// </script>
// </body>
// <ml>