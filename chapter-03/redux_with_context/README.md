redux 基础使用(带手写provider 不带connect)

## Context
每个组件引入store会有路径问题，通过props传递store也过于复杂（有些组件并不需要store），所以需要使用react提供的context功能。
context：上下文环境，让一个树状组件都能访问一个共同对象。
- 上层组件要宣称自己支持context，并且提供一个函数返回代表context的对象
- 利用现有的顶层组件会使现有的顶层组件本身复杂化，所以使用一个特殊的react组件（provider）

## Provider
provider也是一个react组件，其render函数就是简单的把子组件渲染出来，没有任何附加，provider扮演的角色只是提供context
- 把渲染工作全部交给子组件（每个react组件的props都有一个特殊属性children，代表子组件）
- provider要足够通用，在这个文件中也不导入store，而是使用者通过prop传递进来

有了以下两点，provider才能够被react认可为一个context的提供者
- 提供一个函数getChildContext，返回context对象
- 指定childContextTypes属性，和getChildContext对应

子组件访问context
- 给子组件的contextTypes赋值，要求和Provider.childContextTypes一致
- 子组件中对store的访问，通过this.context.store完成（this.context就是provider提供的context对象）
