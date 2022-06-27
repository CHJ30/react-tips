import React, { useState, useMemo, useCallback } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const person = { name: "chj" };
  const memoizedPerson = useMemo(() => person, []);
  const handle = () => {};
  const memoizedHandle = useCallback(handle, []);
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
      <Child2 person={memoizedPerson} handle={memoizedHandle} />
    </div>
  );
}
