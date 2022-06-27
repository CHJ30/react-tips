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
