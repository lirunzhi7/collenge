
### 获取DOM
1. document.getElementById(id)
2. [context].getElementsByTagName(标签名)
3. [context].getElementsByClassName(类名)
4. [context].querySelector(css选择器)
通过css选择器获取`一个`DOM对象，如果有多个符合条件的元素只获取第一个
5. [context].querySelectorAll(css选择器)
获取的结果是类数组，可以像数组一样去操作索引和length
通过css选择器获取`所有`符合条件的DOM元素
6. document.documentElement 获取HTML标签
7. document.body 获取body标签
8. document.head 获取head标签

### 节点
页面里面所有东西都是节点
|        |    元素节点 | 文本节点 | 注释节点 | 文档节点 |
|----    |------------|---------|----------|---------|
|nodeType|   1        |   3      |   8     |   9     |
|nodeName| 大写的标签名|  #text   | #comment | #document |
|nodeValue| null      |  文本内容 | 注释内容 | null    |

换行和空格会被解释成文本节点

### 获取节点
childNodes 获取子节点
children 获取元素子节点 元素就是指的标签
firstChild 获取第一个子节点
firstElementChild 获取第一个元素子节点
lastChild 获取最后一个子节点
lastElementChild 获取最后一个元素子节点
nextSibling 弟弟节点
nextElementSibling 弟弟元素节点
previousSibling 哥哥节点
previousElementSibling 哥哥元素节点
parentNode 父亲节点

### 操作DOM
1. document.createElement(标签名)
// 通过标签名创建一个元素
2. [container].appendChild(node)
// 在容器的最后添加一个元素
3. [container].innerText = '<a>点我</a>'
innerText 不能是被标签
4. [container].innerHTML = '<a>点我</a>'
innerHTML可以识别标签
5. [container].insertBefore(newEl, oldEl)
在一个容器(dom)里面将一个dom(newEl)放入另一个dom(oldEl)前面
6. [container].removeChild(child)
删除容器里面的一个节点
7. [container].getAttribute(name)
7.1. [container].setAttribute(name, val)
7.2. [container].removeAttribute(name)
查找标签里面写的属性
设置标签里面的属性
删除标签里面的属性
