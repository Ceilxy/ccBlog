(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{207:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue基础语法-待补全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue基础语法-待补全"}},[t._v("#")]),t._v(" Vue基础语法(待补全)")]),t._v(" "),a("h2",{attrs:{id:"环境搭建命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建命令"}},[t._v("#")]),t._v(" 环境搭建命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue init webpack vuedemo（项目名称）\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuedemo（项目名称）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Build: webpack相关代码\nConfig: 配置目录，运行环境，端口\nNode_modules: npm加载的项目依赖文件\nSrc - 开发目录\nAssets 放置图片，logo，静态文件存放（webpack处理的）\nComponents 组件存放文件，可以不用\nApp.vue 项目统一入口组件，可以写组件\nMain.js 核心文件，入口js文件\nStatic 静态资源目录（不受webpack影响，通过绝对路径，通常存放第三方静态资源库）\nTest 初始测试目录，可删除\nIndex.html 首页入口文件，添加meta信息或统计代码\nPackage.json 项目配置文件\nReadme.md 说明\n")])])]),a("h3",{attrs:{id:"ref的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref的作用"}},[t._v("#")]),t._v(" ref的作用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 获取dom元素 $ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n获取子组件中的data\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 父组件中"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HelloWorld ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 然后methods里"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 调用子组件\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 子组件调用父组件\n    https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jianshu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("623")]),t._v("c8b009a85\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 子组件methods中 \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refreshData"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    父组件中"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HelloWorld ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" @refreshData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getData"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"vue易混淆事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue易混淆事件"}},[t._v("#")]),t._v(" vue易混淆事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@change：手动输入或者通过弹出框选择之后触发 @change"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handleChange'")]),t._v("\ntrigger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ‘blur’ 表示“当失去焦点时（光标不显示的时候），触发提示\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" functionName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);