# React 小技巧

原文： [https://piyushsinha.tech/series/optimizing-react?ck_subscriber_id=1555690090](https://piyushsinha.tech/series/optimizing-react?ck_subscriber_id=1555690090)

github Demo:https://github.com/CHJ30/react-tips

### 1. React.memo(comp,[areEqual(prevProp,nextProps)])

1. 场景：父组件中有 N 个小组件，其中有父组件给子组件传值后子组件频繁更新渲染，也有子组件不频繁渲染的组件。
2. 第二个参数为空时，默认比较传递给子组件的**参数为原始值时（number,string,boolean,null,undefined），并且参数与上次传递的传输相等时**，React.memo 才会避免重复渲染(因为 React.memo 是用 referential equality 引用相等作为判断)
3. 第二个参数不为空时，使用第二个参数（相等判断参数）作为是否需要重新渲染的判断一句
4. 小 Demo

- 父组件：

```jsx
import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
export default function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count
      </button>
      <Child1 count={count} />
      <Child2 string={"我是一段字符串"} />
    </div>
  );
}
```

- 子组件 1（频繁更新

```jsx
import React from "react";
export default function Child1(props) {
  return (
    <div>
      <span>我是一直变化的组件</span>
      <span>{props.count}</span>
    </div>
  );
}
```

- 子组件 2（不频繁更新

```jsx
import React from "react";
export default function Child2(props) {
  return (
    <div>
      <span>我是不会变化的组件</span>
      <span>{props.string}</span>
    </div>
  );
}
```

点击按钮后使用 React devtool 来抓取渲染时间

可以看到子组件 2 花费了部分时间渲染

![Untitled](React%E5%B0%8F%E6%8A%80%E5%B7%A7%20fde02afb8a6745819d8d99c5658c7765/Untitled.png)

使用 React.memo

```jsx
import React from "react";
export default React.memo(function Child2(props) {
  return (
    <div>
      <span>我是不会变化的组件</span>
      <span>{props.string}</span>
    </div>
  );
});
```

重新点击，发现子组件 2 的没有被重复渲染

![Untitled](React%E5%B0%8F%E6%8A%80%E5%B7%A7%20fde02afb8a6745819d8d99c5658c7765/Untitled%201.png)

### 2. useMemo

1. 由于 React.memo 的判断限制，那有什么可以帮助我们当参数为非原始值时做一个参数缓存呢。答案是 useMemo。
2. 小 Demo

将父组件修改为

```jsx
import React, { useState, useMemo } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
export default function UseMemo() {
  const [count, setCount] = useState(0);
  const person = { name: "chj" };
  const memoizedPerson = useMemo(() => person, []); // 这里使用
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count
      </button>
      <Child1 count={count} />
      <Child2 person={memoizedPerson} />
    </div>
  );
}
```

效果确实是减少了重复渲染

![Untitled](React%E5%B0%8F%E6%8A%80%E5%B7%A7%20fde02afb8a6745819d8d99c5658c7765/Untitled%202.png)

### 2. useCallback

1. 同理，当传递函数时，使用 useCallback 包裹即可
2. `useCallback(fn, deps)`  相当于  `useMemo(() => fn, deps)`

```jsx
const handleClick = () => {};
const memoizedHandleClick = useCallback(handleClick, []);
```
