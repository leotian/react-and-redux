// Clock.js
import React from "react";
import moment from "moment";

console.log("init Clock");

const Clock = () => <h1>{moment().format("MMMM Do YYYY, h:mm:ss a")}</h1>;

export default Clock;

// Usage of Clock
const Clock = React.lazy(() => {
    console.log("start importing Clock");
    return import("./Clock");
});

<Suspense>
  { show ? <Clock/> : null}
</Suspense>

getDerivedStateFromError(error) {
  if (isPromise(error)) {
     error.then(reRender);
  }
}

<Suspense fallback={<div>Loading...</div>}>
  { show ? <Clock/> : null}
</Suspense>

import {unstable_createResource as createResource} from 'react-cache';

// 看不出来异步，感觉就是同步代码
const resource = createResource(functionReturnAPromise);

// Foo渲染的时候
const Foo = () => {
  const result = resource.read();
  /* resource.read(); 调用functionReturnAPromise，这个函数调用一个API，发出ajax请求，然后throw一个promise出来
    Foo函数被打断，进入getDerivedStateFromError，先画fallback里的东西什么的，hold住，然后等到promise被resolve的时候，重新画一次
    重新执行resource.read();第二次执行的时候，不会再有promise抛出，而是拿到返回结果，结果被渲染出来

    resource.read();也算一个副作用，所以用上Suspense导致render组件有副作用了
   */
  return (
    <div>{result}</div>
  );
};
