---
title: Vue学习
---
# Vuex状态管理

## 概念
Vuex是用于vue应用程序开发的**状态管理模式**。
它采用了**集中式储存**统一管理状态，从而使不同组件共享状态。

## 简单原理
Vuex实现了**单向数据流**，用**state存放数据**，通过**Mutation获取或修改数据**。然后通过**Action进行所有异步操作**（如调用后端接口异步获取更新数据或进行批量同步操作），Action通过**提交mutation来修改数据**。最后，根据State的变化，渲染到视图上。

## 为什么要状态管理
在简单的Vue项目中，我们一般通过**组件传参**的方式来同步或更改数据，但是一旦项目变得复杂，多个组件都需要获取和更改数据时，管理和维护数据是一个很困难的事。所以Vue为需要频繁使用的数据提供了**统一管理的工具--VueX**。 使用vuex可以**集中式储存**管理所有组件的状态，即**不同组件之间可以数据共享，获取数据或者触发行为**。我们只需要把值定义在Vuex当中，就可以在整个项目的组件中使用，这样可以让项目的更加清晰易维护。

## Store （仓库）
Vuex 的核心就是 store。“store”就是一个**存放状态（state）的仓库**。
::: tip
- Vuex的状态储存是**响应式**的。当Vue组件从store中读取状态时，若store中的状态发生了变化，组件也会更新。
- 我们**不能直接改变**store中的state，需要**通过提交mutation**来改变state。
:::
<span id="example1"></span>
**如果想要全局使用Store实例，需要在根组件中声明**，如：
```js
// main.js文件
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
Vue.use(Vuex);

// 实例化Vuex
const store = new Vuex.Store({
    modules: {
        moduleA,
        moduleB
    },
    getters
})
// 暴露
export default store
```

## 核心概念

### 1. state
<span id = "example2"></span>
state是页面状态管理的容器对象，集中储存了组件中data对象的零散数据。

**声明State的方法**
```js
const store = new Vuex.Store({
  state: {
    todos: [
                { id: 1, text: '写Blog', isDone: true },
                { id: 2, text: '做demo', isDone: false },
                { id: 3, text: '算法学习', isDone: false }
            ]
  }
})
```
**由于Vuex的状态储存是响应式的，从store实例中读取状态的方法就是在计算属性中返回某个状态，** 如：
```js
// 在组件中展示state
// 每当store里的count变化的时候就会重新计算，刷新页面
computed: {
    count () {
      return store.state.todos
    }
}
```
**如果在根实例中注册了store选项，可以直接通过自组件访问**，如：
```js
computed: {
    count(){
        return this.$store.state.todos
    }
}
```

### 2. getters
getters就像**store的计算属性**，当我们需要对state里的数据做处理时特别有用。
::: tip
它的返回值会根据依赖值进行缓存，只要它的依赖值变化了，它就会被更新计算。
:::

他也是**state对象的读取方法**，组件通过函数返回值来读取全局state对象。getter在通过function访问state时，每次都会去调用，但不会缓存结果

```js
getters: {
    // Getter 接受 state 作为其第一个参数
    // 对数据做过滤处理,但不改变数据的值！！！
    todolist: state => {
        return state.todos.filter(todo => todo.isDone)
    }
}
})
```
**getters还接受其他 getters 作为第二个参数**，如不需要用其他 getters，第二个参数可以省略，如
```js
getters: {
  // Getter 还也可以接收 getters 作为第二个参数
  // 读取其他getter里函数来做进一步处理
  todoLength: (state, getters) => {
    return getters.todolist.length;
  }
}
```

**Getter还会将store.getter对象暴露出去，可以以属性形式访问**，如

```js
console.log(store.getters.todolist)
```

**getter还可以返回一个函数来实现传参，在对数组进行查询的时候特别有效**，如
```js
getters: {
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
}
```
**在组件中调用的方法**
```js
computed: {
    getTodolist() {
        return this.$store.getters.todolist
    }
}
```
```js
// 组件中获取值
methods:{
    find(n){
            store.getters.getTodoById(n) 
        }
}

computed:{
    findTwo(){
        store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
    }
}
```

### 3. mutation
Mutation是改变store中状态的执行者，他可以通过提交mutation来更改状态。每个mutation会有一个字符串的事件类型（type）和一个回调函数（handler），回调函数就是我们实际更改状态的地方。
<span id="example3"></span>
```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    // 事件类型 type 为 increment
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```
**然后通过store.commit来触发方法**，如：
```js
store.commit('increment')
```
**还可以传入额外的参数**，如：
```js
mutations: {
    handleAdd(state, item) {
        state.todolist.push(item)
    },
    handleDelete(state, index) {
        state.todolist.splice(index, 1)
    },
    handleChange(state, index) {
        state.todolist[index].isDone = !state.todolist[index].isDone
    }
}

// 调用方法 (actions中)
store.commit('handleAdd',item)
```
**如果需要修改规则，那就要遵循Vue的规则**，如：
```js
// 添加
mutations: {
  addAge(state) {
    Vue.set(state,"age",15)
  }
}
// 删除
Vue.delete(state,'age')
```
::: tip
需要注意的是Mutation**必须是同步的函数**，因为我们需要用mutation明确的来追踪到状态的变化，如果使用异步函数，则改变了初衷。
:::

**还可以使用常量来替代mutation事件的名字**，如：
```js
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'
```
```js
// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
})
```

### 4. action
::: tip
- Action不能直接更改状态，只能提交mutation
- 可以进行异步操作和批量同步操作
:::

Action函数的第一个参数是**context，它与store有相同的方法和属性，但他们并不是同一个实例**。在action中通过context.commit来提交mutation，或者通过context.state和context.getters来获取state和getters。为了代码简化，也可以**使用参数解构{commit}来直接展开**，如：
<span id="example4"></span>
```js
const store = new Vuex.Store({
  state: {
    todos: [
        // ...
    ]
  },
  mutations: {
    handleAdd(){
        // ...
    }
    // ...
  },
  actions: {
    handleAdd(context, item) {
        context.commit('handleAdd', item)
    },
    // 解构函数 {commit}
    handleDelete({ commit }, index) {
        commit('handleDelete', index)
    },
    handleChange({ commit }, index) {
        commit('handleChange', index)
    }
  }
})
```

**在组件中分发action**
```js
this.$store.dispatch('handleAdd', newTodo)
```

**组合Action**
::: tip
如何才能知道 action 什么时候结束呢？如何才能组合多个 action，以处理更加复杂的异步流程？
store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：
:::

```js
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}

// 调用
store.dispatch('actionA').then(() => {
  // ...
})
```
**还可以利用异步函数async/await来组合action**，如：
```js
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  }
}
```
**一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。**

### 5. module
当Vuex使用单一状态的时候，项目的所有状态都会集中到一个对象中。但是当项目变庞大时，store对象会变得很多，且很难管理。所以Vue允许我们将store分割成各个对象，就比如**store（老板)**把任务分给各个**模块（module)**，让模块来充当部门管理员，如果有什么事情需要处理,直接联系模块，每个模块里都有自己的state，mutation，action，getter。这样大大提高了代码的可维护性和效率。

**首先我们需要在每个模块文件中暴露**，如：
```js
// moduleA.js
const stete = {}
const mutations = {}
const actions = {}

export default {
  state,
  mutations,
  actions
}
```
**然后在index.js文件中导入module**

```js
import moduleA from './module/moduleA';
import moduleB from './module/moduleB';

export default new Vuex.Store({
    modules: {
        moduleA, 
        moduleB
    },
    // ...
}
```
**在组件中引用**
```js
computed: {
    ...mapState({
        name: state => state.moduleA.name
    }),
}
```


## Vuex帮手 map
::: tip
**...mapState()   ...mapGetters()   ...mapActions()**
:::

<span id="example5"></span>
### mapState()
<br>
当组件中要一次传入多个状态时，用mapState()可以节省很多时间。

```js
import { mapState } from 'vuex'

computed: mapState({
    // 箭头函数可使代码更简练
    a: state => state.a,
    b: state => state.b,
    c: state => state.c
})
// 之后可以用state.a直接调用
// 或者传入字符串数组
computed: mapState([
  // 映射 this.a 为 store.state.a
  'a',
  'b',
  'c'
])
// 使用对象展开运算符
...mapState({
    // ...
})
```
<span id="example7"></span>
### mapGetters()
```js
computed: {
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter'
      // ...
    ])
}
// this.doneCount 映射为 this.$store.getters.doneTodosCount
mapGetters({
  doneCount: 'doneTodosCount'
})
```

<span id="example6"></span>
### mapMutations()
```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      // 将 `this.increment()` 映射为 
      // `this.$store.commit('increment')`
      'increment', 
      // `mapMutations` 也支持载荷：
      // 将 `this.incrementBy(amount)` 映射为 
      // `this.$store.commit('incrementBy', amount)`
      'incrementBy' 
    ]),
    ...mapMutations({
      // 将 `this.add()` 映射为 
      // `this.$store.commit('increment')`
      add: 'increment' 
    })
  }
}
```
<span id="example8"></span>
### mapActions()
```js
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      // 将 `this.increment()` 映射为 
      // `this.$store. dispatch('increment')`
      'increment', 
      // `mapActions` 也支持载荷：
      // 将 `this.incrementBy(amount)` 映射为 
      // `this.$store. dispatch('incrementBy', amount)`
      'incrementBy' 
    ]),
    ...mapActions({
      // 将 `this.add()` 映射为 
      // `this.$store. dispatch('increment')`
      add: 'increment' 
    })
  }
}
```

## 在项目中使用vuex来管理状态

1. 安装：```npm install vuex --save```
2. 在src目录下新建一个名为store的文件夹
3. 在store文件里新建一个index.js
4. 在store文件里新建一个modules文件夹来储存状态
```
目录机构如下：
├── store                   // 仓库文件
│   ├── index.js            // store实例化
│   ├── getters.js          // getter文件
│   └── modules             // 模块储存文件
│       └── todolist.js     //模块                 
```

5. 在index.js文件中引入vue和vuex, 实例化store来统一管理状态
[详细代码](#example1)

6. 在state中定义数据(初始化数据)
[详细代码](#example2)

7. 在mutations中定义方法
[详细代码](#example3)

8. 在actions中提交方法
[详细代码](#example4)

9. 在组件中使用vuex
<br>
[mapState详细代码](#example5)<br>
[mapMutations详细代码](#example6)<br>
[mapGetters详细代码](#example7)<br>
[mapActions详细代码](#example8)<br>

```js
import store from "@/vuex/store";  //引入前面建立好的store文件，地址自定
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"; //引入辅助函数

export default {
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
>参考链接：<br>
[Vue 组件间通信六种方式](https://mp.weixin.qq.com/s/XZ3BmZLY4OwwGm2Hbbepbg)<br>
[Vuex白话教程](https://www.jianshu.com/p/120eaf50331c)