### 定时器
> 1. window.setTimeout
规定多长时间之后执行一件事
[语法]
`var time = window.setTimeout(handler, ?timeout)`
handler是一个函数
timeout是一个以毫秒为单位的时间数字
1000毫秒等于1秒
time是定时器返回的值,表示定时器的序列
[语法]`window.clearTimeout(time)`
把某一个定时器的序列传(time)给window.clearTimeout(time),就清除这个定时器

> 2. window.setInterval
[语法]`var time = window.setInterval(handler, ?timeout)`
handler是一个函数
timeout是一个以毫秒为单位的时间数字
每隔timeout毫秒执行一次，如果不清除会无限的执行下去
也就是说handler这个方法会无限次的执行
[语法] `window.clearInterval(time)`

> 3. requestIdleCallback(handler, ?option)
handler是一个函数
option是一个对象
当浏览器空闲的时候回执行handler方法