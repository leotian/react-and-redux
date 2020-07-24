import React from 'react'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234293492,2964278454&fm=26&gp=0.jpg"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0,
      obj: {
        a: 123,
        b: 456,
      },
    };
  }

  handleMouseMove(event) {
    // this.setState({
    //   x: event.clientX,
    //   y: event.clientY
    // });
    const { obj } = this.state
    obj.a = 123123
    obj.b = 456456
    this.setState({
      x: event.clientX,
      y: event.clientY,
      obj,
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 <Mouse> 渲染结果的静态表示
        */}
        {/*{this.props.render1(this.state)}*/}
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        {/*<Mouse render1={mouse => (*/}
        {/*  <Cat mouse={mouse} />*/}
        {/*)}>*/}
        {/*  <div>在这里移动</div>*/}
        {/*</Mouse>*/}
        {/*重要的是要记住，render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式。*/}
        {/*事实上， 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.*/}
        {/*尽管之前的例子使用了 render，我们也可以简单地使用 children prop！*/}
        {/*<Mouse children={mouse => (*/}
        {/*  <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>*/}
        {/*)}/>*/}
        <Mouse>
          {mouse => (
            <p>鼠标的位置是 {mouse.x}，{mouse.y}，{mouse.obj.a}</p>
          )}
        </Mouse>
      </div>
    );
  }
}

// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现
// 使用具有 render prop 的普通组件创建一个！
// function withMouse(Component) {
//   return class extends React.Component {
//     render() {
//       return (
//         <Mouse render={mouse => (
//           <Component {...this.props} mouse={mouse} />
//         )}/>
//       );
//     }
//   }
// }

