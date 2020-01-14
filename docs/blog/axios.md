## Axios学习
基于promise的HTTP库，可以用在node.js和浏览器
```
axios.get('user?IP=12345')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });

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
**POST请求**
```
axios.post('/user', {
    ...
})
.then(function(response){
    ...
})
.catch(function(error){
    ...
})
```
**执行多个并发请求**
```
function getUserAccount(){
    return axios.get('/user/12345')
}

axios.all([getUserAccont(), getUserPermissions()])
    .then(axios.spread(function (acct, perms){
        //两个请求都执行完成
    }))
```

**Axios API**
```
//发送post请求
axios({
    method: 'post',
    url: 'user/12345',
    data: {
        firstName: 'Cc',
        lastName: ''
    }
});
```

**请求方法的别名**
```
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```
在使用别名方法时， url、method、data 这些属性都不必在配置中指定。

**并发请求**
```
axios.all(iterable)
axios.spread(callback)
```

**创建实例**
```
var instance = axios.create({
    baseURL: 'https://...',
    timeout: 1000,
    header: {'X-Custom-Header': '...'}
})

```

**实例方法**
指定的配置将与实例的配置合并
```
axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]])
```

**取消**
使用cancel toeken取消请求
```
var cancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345',{
    cancelToken: source.token
}).catch(function(thrown){
    if (axios.isCancel(thrown)){
        console.log('...',thrown.message);
    } else {
        //错误
    }
});

／／取消请求(message)
source.cancel('...');
```


