# 搭建一个http-server

### 使用http-server开启一个本地服务器
1. 下载http-server
```bash
npm install http-server -g
```
2. 开启http-server服务
```bash
http-server -c-1
// 或者http-server
//只输入http-server的话，更新了代码后，页面不会同步更新
```

3. 在url后+ /doc_name.后缀名，可以获取文件

4. 关闭http-server服务
按快捷键CTRL-C
终端显示^Chttp-server stopped.即关闭服务成功。