---
title: Vue学习
---
## Vuex状态管理

### 概念

Vuex是用于vue应用程序开发的**状态管理模式**。它采用了**集中式储存**统一管理状态，从而使不同组件共享状态。

### 为什么要状态管理

- #### 单向数据流
单向数据流包括了state -> view -> actions

- #### 多个组件共享状态
当我们需要多个组件共享同一状态时，
这种模式很脆弱，并且很难维护代码

使用vuex**集中式储存**管理所有组件的状态，可以解决不同组件之间的数据共享和数据持久化，任何组件都可以获取状态或者触发行为，还可以保持状态间的独立性。

### Store （仓库）
Vuex 的核心就是 store。“store”基本上就是一个容器，它包含着你的应用中大部分的state。Vuex 和单纯的全局对象有以下两点不同：
- Vuex的状态储存是**响应式**的。当Vue组件从store中读取状态时，若store中的状态发生了变化，组件也会更新。
- 但是我们**不能直接改变**store中的state，需要**通过mutation提交方法**改变state。

### 核心概念

#### 1. state
state是vuex的数据源，在根组件注册了store之后，可以在所有组件中用this.$store.state.varName 访问。
#### 2. getters
getters就像store的计算属性，它的返回值会更具依赖进行缓存，只要它的依赖值变化了，它就会被更新计算。
getters用state作为第一个参数，接受其他 getters 作为第二个参数，如不需要用其他 getters，第二个参数可以省略。
当一个组件需要用到多个state时，可以用...mapState来帮助我们生成属性

#### 3. mutation
更改Vuex中状态的
mutation必须是同步的
#### 4. action

#### 5. module


### 在项目中引入vuex

1. 安装：```npm install vuex --save```
2. 在src目录下新建一个名为store的文件夹
3. 在store文件里新建一个index.js
4. 在store文件里新建一个modules文件夹来储存状态
```
目录机构如下：
├── store                   // 仓库文件
│   ├── index.js            // 
│   ├── getters.js          // 
│   └── modules             // 模块储存文件
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
    todolist: [

    ]
}
```

7. 在mutations中定义方法
```js
const mutations = {
    handleAdd(state, value){
        // ...
    }
}
```

8. 在actions中提交方法
```js
const actions = {
    // ...
    get(context, var)
}
```

9. 在组件中使用vuex
```js
import store from "@/vuex/store";  //引入前面建立好的store文件，地址自定
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"; //引入辅助函数

export default {
   store,
   data: () => {
       return {};
       },
    computed: {
        ...mapState([
           "...",  //将该组件中需要用的状态添加进来
    ]),
    ...mapGetters(["..."])
    },
    methods: {
        ...mapActions([ "..."]),
        ...mapMutations([
        "...",
    ])
}
```
```js
// 或者使用
export default{
    data(){
        // 调用state
        todolist: this.$store.state.todolist
        return {}
    },
    computed: {
        // 调用mutations
        this.$store.commit('...',variable)
    },
    methods: {
        // 调用actions
        getPrice(){
            this.$store.dispatch('...')
        }
    }
}

```