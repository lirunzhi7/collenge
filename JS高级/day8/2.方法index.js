

var list = document.getElementById('list')

var picture = [
    {
      "id": 1,
      "title": "HUAWEI全网通版（亮黑色）",
      "price": 499,
      "time": "2017-03-15",
      "hot": 198,
      "img": "img/1.jpg"
    },
    {
      "id": 2,
      "title": "HUAWEI（曜石黑）",
      "price": 129,
      "time": "2017-02-08",
      "hot": 25,
      "img": "img/2.jpg"
    },
    {
      "id": 3,
      "title": "华为畅享7（香槟金）",
      "price": 895,
      "time": "2017-01-25",
      "hot": 568,
      "img": "img/3.jpg"
    },
    {
      "id": 4,
      "title": "HUAWEI全网通版（曜石黑）",
      "price": 1895,
      "time": "2016-12-30",
      "hot": 20000,
      "img": "img/4.jpg"
    },
    {
      "id": 5,
      "title": "HUAWEI全网通版（玫瑰金）",
      "price": 3587,
      "time": "2016-01-30",
      "hot": 1032654,
      "img": "img/5.jpg"
    },
    {
      "id": 6,
      "title": "华为畅享7（香槟金）",
      "price": 992,
      "time": "2018-01-01",
      "hot": 1,
      "img": "img/6.jpg"
    },
    {
      "id": 7,
      "title": "HUAWEI全网通版（樱语粉）",
      "price": 564,
      "time": "2017-02-19",
      "hot": 400,
      "img": "img/7.jpg"
    },
    {
      "id": 8,
      "title": "HUAWEI全网通版（曜石黑）",
      "price": 420,
      "time": "2017-01-25",
      "hot": 240,
      "img": "img/8.jpg"
    },
    {
      "id": 9,
      "title": "HUAWEI P10（钻雕金）",
      "price": 12,
      "time": "2014-01-01",
      "hot": 12345678,
      "img": "img/9.jpg"
    },
    {
      "id": 10,
      "title": "HUAWEI全网通版（曜石黑）",
      "price": 420,
      "time": "2017-01-25",
      "hot": 240,
      "img": "img/8.jpg"
    }
  ]
var str = ``
for (var i = 0; i < picture.length; i++) {
    var cur = picture[i]
    str +=`<li time=${cur.time} hot=${cur.hot} price=${cur.price}>
    <img src="${cur.img}" alt="">
    <span>${cur.title}</span>
    <span>${cur.time}</span>
    <span>${cur.hot}</span>
    <span>￥${cur.price}</span>
</li>`
}
list.innerHTML = str
console.log(list)
var newclick = document.getElementsByTagName('a')
function fn(){
    for (var i = 0; i < newclick.length; i++) {
        newclick[i].ppp=i
        newclick[i].aaa=-1
        newclick[i].onclick=function (){
            this.aaa = this.aaa*(-1)
            newsort.call(this)
            remove()
            color.call(this)
        }
    }
}
fn()
var li = list.getElementsByTagName('li')
var arylist = Array.prototype.slice.call(li)
function newsort(){
    var that = this
    var index=['time', 'hot', 'price']
    arylist.sort(function(a,b){
        var first = a.getAttribute(index[that.ppp])
        var second = b.getAttribute(index[that.ppp])
        if(that.ppp === 0){
            //  first = first.split('-')
            //  second = second.split('-')
            //  first = first[0]
            //  second = second[0]
            first = first.replace('-','').replace('-','')
            second = second.replace('-','').replace('-','')
        }
        return first - second*(that.aaa)
    })
    var flg = document.createDocumentFragment()
    for (var i = 0; i < arylist.length; i++) {
        var cur = arylist[i]
        flg.appendChild(cur)
    }
    list.appendChild(flg)
}

function color(){
    for (var i = 0; i < newclick.length; i++) {
        if(this.aaa>0){
            this.children[0].classList.add('bg')
            this.children[1].classList.remove('bg')
        }else{
            this.children[1].classList.add('bg')
            this.children[0].classList.remove('bg')
        }
    }
}
function remove(){
    for (var i = 0; i < newclick.length; i++) {
        newclick[i].children[0].classList.remove('bg')
        newclick[i].children[1].classList.remove('bg')
    }
}
