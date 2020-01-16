---
title: Vue学习
---
## Vuex状态管理

### 概念

Vuex是用于vue应用程序开发的**状态管理模式**。它采用了**集中式储存**统一管理状态，从而使不同组件共享状态。

### 为什么要状态管理
在简单的Vue项目中，我们一般通过组件传参的方式来同步或更改数据，但是一旦项目变得复杂，多个组件都需要获取和更改数据时，管理和维护数据是一个很困难的事。所以Vue为需要频繁使用的数据提供了统一管理的工具--VueX。 使用vuex可以**集中式储存**管理所有组件的状态，即不同组件之间可以数据共享，获取数据或者触发行为。我们只需要把值定义在Vuex当中，就可以在整个项目的组件中使用，这样可以让项目的数据更加清晰易维护。

### Store （仓库）
Vuex 的核心就是 store。“store”就是一个存放状态（state）的仓库。
有两点要注意的：
- Vuex的状态储存是**响应式**的。当Vue组件从store中读取状态时，若store中的状态发生了变化，组件也会更新。
- 我们**不能直接改变**store中的state，需要**通过mutation提交方法**改变state。

### 核心概念

#### 1. state
state是vuex的数据源，在根组件注册了store之后，
（可以在所有组件中用this.$store.state.varName 访问。）

#### 2. getters
getters就像store的计算属性，它的返回值会根据依赖值进行缓存，只要它的依赖值变化了，它就会被更新计算。getter 也可以返回一个函数，来实现给 getter 传参。在对 store 里的数组进行查询时非常有用。getter在通过function访问时，每次都会去进行调用，而不会缓存结果

(getters用state作为第一个参数，接受其他 getters 作为第二个参数，如不需要用其他 getters，第二个参数可以省略。)
(当一个组件需要用到多个state时，可以用...mapState在组件里拿state的数据)


#### 3. mutation
Mutation可以理解为改变store中状态的执行者，因为他可以通过function来更改state。我们还可以通过 store.commit('...',var) 传入额外的参数改变state。需要注意的是Mutation必须是同步的函数，因为我们需要用mutation明确的来追踪到状态的变化，如果使用异步函数，则改变了初衷。

#### 4. action
如果想要使用异步操作，可以在action中提交mutaion，而不是直接变更状态。Action函数的第一个参数是context，它与store有相同的方法和属性，但他们并不是同一个实例。在action中通过context.commit来提交mutation，或者通过context.state和context.getters来获取state和getters。为了代码简化，也可以使用参数解构来直接展开，如{commit}。

#### 5. module
当Vuex使用单一状态的时候，项目的所有状态都会集中到一个对象中。但是当项目变庞大时，store对象会变得很多，且很难管理。所以store（老板）可以把任务分给各个模块（module），让模块来充当部门管理员，每个模块里都有自己的state，mutation，action，getter。将工作划分来提高工作效率。

### 在项目中使用vuex来管理状态

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
│       └── todolist.js     //模块                 
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
    funcName(context, item)
}
```

9. 在组件中使用vuex
通过...mapState()、...mapGetters()、...mapActions()辅助函数可以
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