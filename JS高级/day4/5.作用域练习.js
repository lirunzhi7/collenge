    // var  i =0;
    // function fn(i) {
    //     return function (n) {
    //         console.log(n + i++);
    //     }
    // };
    // var f  = fn(5);
    // f(10);
    // f(20);
    // fn(8)(12);
    // fn()(18); //NAN 传入的实参为undefined 


    // var  obj= {
    //     i : 10,
    //     fn:(function () {
    //         var i = 0;
    //         return function (n) {
    //             console.log(n + i++)
    //         }
    //     })()//存键值对的时候自执行函数就开始执行
    // };
    // var  f = obj.fn;
    // f(10);10
    // f(20);21
    // obj.fn(30);32
    // obj.fn(40);43


 
    var  i = 2
    function f(){
        i += 2
        console.log(i)
    }
    f()
    console.log(i)
