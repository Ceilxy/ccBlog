# mock.js文档（待补全）

## 概念
**Mock.js可以生成随机数据，拦截Ajax请求**。支持随机生成数据来模拟各种场景，不需要修改既有的代码，就可以拦截AJAX请求，返回模拟的数据。Mockjs简单方便，无侵略性，基本覆盖常有接口数据类型。

## 安装
**npm**
``` bash
npm install mockjs
```
**使用cdn**
```js
<script src="http://mockjs.com/dist/mock.js"></script>
```

## 使用方法
- 直接使用
    - 直接在需要Mock数据的js文件使用
    - 创建一个js/json文件，导入使用
- 搭配node使用
    - 通过node开启mock服务，可加入到package.json命令里上面


### 基础语法
```js
Mock.mock('地址',type,{ "dataname|rule":{"对应的值"} }) 
```
第一个参数**地址**就是我们要通过ajax获取数据时填写的地址，这里的地址可以是**不存在的地址**，
第二个参数是**请求的type(get/post)**，可选填，
第三个参数**需要模拟的数据和相应的规则**


**官网示例：**
[官网示例](http://mockjs.com/examples.html#DPD)
```js
Mock.mock('https://www.test.com',{
    "userInfo|4":[{           //生成|num(4)个如下格式名字的数据
        "id|+1":1,            //数字从当前数开始后续依次加一
        "name":"@cname",      //名字为随机中文名字
        "ago|18-28":25,       //年龄为18-28之间的随机数字
        "sex|1":["男","女"],   //性别是数组中的一个，随机的
        "job|1":["web","UI","python","php"],   //工作是数组中的一个
        "array|1-10": [        // 生成10个hello mock.js数组
            "Hello",
            "Mock.js",
            "!"
            ],
        "ListInfo|5":[{
            "img":Mock.Random.image('200x100')
        }]  // 随机生成图片，大小被指定为200X100
    }]
})
```

为了追求代码更规范，可以把mock文件统一放在mock文件中
```js
//api.js
Const Mock = require('mockjs')

const url = {
    urlOne: 'http://www.text.com'
}
const data = Mock.mock(url.urlOne,{
        // ...
    })

// 暴露
module.exports = function(url, method, query, body){
    return data
}
```

然后用axios接受数据，如：
```js
// 通过axios接收数据
import axios from 'axios'

axios.get('http://www.text.com').then((res) => {
    if(res.status == 200){
        that.setState({
            dataSource: res.data.dataSource
        })
    }
}
```

**既然我们要伪造一个真的后台, 那么我们就创建一个mock-server.js文件,当作是我们的入口。**


>参考链接：<br>
[mockjs新手教程](https://www.jianshu.com/p/5dfa9f0bb11e)<br>
[开启mockjs的三种姿势](https://www.cnblogs.com/soyxiaobi/p/9846057.html)