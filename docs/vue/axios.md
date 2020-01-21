---
title: Axios文档学习
---

## Axios

Axios是基于Promise的http库，可以在node.js和浏览器中使用。他可以**拦截请求和响应、取消请求、转换json、客户端防御XSRF等**。

## 安装
**npm**
```bash
npm install axios
```
**使用cdn**
```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
## 在项目中引入

### 在main.js中引入
```js
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
```

### 在组件中使用axios
```js
this.axios.get('api/user').then((response) => {
    console.log(response.data)
}).catch((error) =>{
    console.log(error)
})
```

```js
// 用id来找user
axios.get('user', {
    params: {
        ID:12345
    }
})
.then(function(response){
    console.log(response);
})
.catch(function (error){
    console.log(error);
})
```
也可以用async/await
```js
async function getUser(){
    try {
        const response = await axios.get('/user?ID = 12345')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
```
**并发多个请求**
```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));


```
**POST请求**

```js
axios.post('/user', {
    // ...
})
.then(function(response){
    // ...
})
.catch(function(error){
    // ...
})
```

**Axios API**
```js
//发送post请求
axios({
    method: 'post',
    url: 'user/12345',
    data: {
        firstName: 'Cc',
        lastName: 'lai'
    }
});

// get请求remote image
axios({
    method: 'get',
    url: 'http://test.com',
    responseType: 'stream'
}).then(function (response){
    response.data.pipe(fs.createWriteStream('abc.jpg'))
})
```

**请求方法的别名**
```js
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```
在使用别名方法时， url、method、data 这些属性都不必在配置中指定。

**创建实例**
```js
var instance = axios.create({
    baseURL: 'https://test.com',
    timeout: 1000,
    header: {'X-Custom-Header': '...'}
})

```

## 请求配置
url是必须的，如果没有指定method，默认是get。
```js
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,
```
## 响应解构
```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```
使用then是你会接受到：
```js
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

## 启动本地server
### Json-server
通过webpack的proxy代理来搭建本地代理

```bash
npm install -g json-server
```


