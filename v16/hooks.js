// 有状态类组件
class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

// 使用useState Hook
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

// useState声明不可以带条件
const Counter = () => {
  const [count, setCount] = useState(0);
  if (count % 2 === 0) {
    const [x, setX] = useState(123);
  }
  const [y, setY] = useState(456);

...
}

// Hooks: useEffect
// 副作用: side effect
// didMount执行一次 didUpdate执行一次
useEffect(() => {
  console.log('Do');
  return () => {
    console.log('Undo'); // willUnMount执行
  }
})

// Hooks: useContext（让代码更精简）
const Context = React.createContext();

//以前
const Render = (
  <Context.Consumer>
    {
      (value) => {
        return <div>{value}</div>;
      }
    }
  </Context.Consumer>
);

//现在
const Render = () => {
  const contextValue = useContext(Context);
  return <div>{contextValue}</div>;
};

// 模拟整个生命周期中只运行一次的方法
useMemo(() => {
  // execute only once
}, []);

// 模拟shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  // 返回结果和shouldComponentUpdate正好相反
  // 访问不了state
};
React.memo(Foo, areEqual);

// 模拟componentDidMount
useEffect(() => {
  // 这里在mount时执行一次
}, []);

// 模拟componentDidUnmount
useEffect(() => {
  // 这里在mount时执行一次
  return () => {
    // 这里在unmount时执行一次
  }
}, []);

// 模拟componentDidUpdate
const mounted = useRef();
// ref本来是为访问dom存在的
// 这里用来产生一个成员变量
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
    // 这里只在update是执行
  }
});

// Hooks之后的组件逻辑重用形态
const XXXX = () => {
  const [xx, xxx, xxxx] = useX();

  useY();

  const {a, b} = useZ();

  return (
    <>
      //JSX
    </>
  );
};
