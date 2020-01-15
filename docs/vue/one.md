## Vue基础语法

#### 环境搭建命令
```bash
vue init webpack vuedemo（项目名称）
cd vuedemo（项目名称）
npm run dev
```

#### 目录结构
```
Build: webpack相关代码
Config: 配置目录，运行环境，端口
Node_modules: npm加载的项目依赖文件
Src - 开发目录
Assets 放置图片，logo，静态文件存放（webpack处理的）
Components 组件存放文件，可以不用
App.vue 项目统一入口组件，可以写组件
Main.js 核心文件，入口js文件
Static 静态资源目录（不受webpack影响，通过绝对路径，通常存放第三方静态资源库）
Test 初始测试目录，可删除
Index.html 首页入口文件，添加meta信息或统计代码
Package.json 项目配置文件
Readme.md 说明
```