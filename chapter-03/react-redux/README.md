redux 基础使用 (带connect、provider)

## react-redux
两个主要功能：
- connect 连接容器组件和傻瓜组件（redux_smart_dumb）
- provider 提供包含 store 的 context（redux_with_context）

### connect
接收两个参数，执行结果是一个接收傻瓜组件的函数，第二次执行后返回容器组件
- mapStateToProps 把store上的状态转化为内层傻瓜组件的prop
- mapDispatchToProps 把内层傻瓜组件中的用户动作转化为派送给store的动作，也就是把内层傻瓜暴露出来的函数类型的prop关联上dispatch调用

mapStateToProps 和 mapDispatchToProps 都可以包含第二个参数 ownProps，也就是外部传递给容器组件的props

### provider
provider扮演的角色只是提供context
