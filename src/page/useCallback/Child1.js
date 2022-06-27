import React from "react";
export default function Child1(props) {
  return (
    <div>
      <span>我是一直变化的组件</span>
      <span>{props.count}</span>
    </div>
  );
}
