import React from "react";
export default React.memo(function Child2(props) {
  return (
    <div>
      <span>我是不会变化的组件</span>
      <button
        onClick={() => {
          props.handle();
        }}
      >
        点击触发
      </button>
      <span>{props.person.name}</span>
    </div>
  );
});
