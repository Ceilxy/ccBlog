---
title: Vue学习
---
## Vuex状态管理

### 概念

Vuex是用于vue应用程序开发的**状态管理模式**。它采用了**集中式储存**管理应用的组件状态，可以使不同组件共享统一的状态

### 为什么要状态管理

- #### 单向数据流
单向数据流包括了state -> view -> actions

- #### 多个组件共享状态
当我们需要多个组件共享同一状态时，
这种模式很脆弱，并且很难维护代码

使用vuex**集中式储存**管理所有组件的状态，可以解决不同组件之间的数据共享和数据持久化，任何组件都可以获取状态或者触发行为，还可以保持状态间的独立性。

### 核心概念

#### 1. store
每一个 Vuex 应用的核心就是 store。“store”基本上就是一个容器，它包含着你的应用中大部分的state。Vuex 和单纯的全局对象有以下两点不同：
- Vuex的状态储存是**响应式**的。当Vue组件从store中读取状态时，若store中的状态发生了变化，组件也会更新。
- 但是我们**不能直接改变**store中的状态，需要**通过mutation提交方法**改变state。

#### 2. state

#### 3. getters

#### 4. mutation

#### 5. action

#### 6. module

### 在项目中引入vuex

1. 安装：```npm install vuex --save```
2. 在src目录下新建一个名为store的文件夹
3. 在store文件里新建一个index.js
4. 在store文件里新建一个modules文件夹来储存状态
```
目录机构如下：
├── store                   // 
│   ├── index.js            // 
│   ├── getters.js          // 
│   └── modules             // 
│       ├── name1.js        // 
│       └── name2.js        //                 
```

5. 在index.js文件中引入vue和vuex来统一管理状态
```js
import Vue from 'vue'
import Vuex from 'vuex'
import name1 from './modules/name1'
import name2 from './modules/name2'
Vue.use(Vuex);

// 实例化Vuex
const store = new Vuex.Store({
    modules: {
        name1,
        name2
    },
    getters
})
// 暴露
export default store
```

6. 在state中定义数据(初始化数据)
```js
const state = {
    //...
    todolist: 
}
```

7. 在mutations中定义方法
```js
const mutations = {
    handleAdd(){

    },
    handleDelete(){

    }
}
```

8. 在actions中提交方法
```js
const actions = {

}
```

9. 在组件中使用vuex