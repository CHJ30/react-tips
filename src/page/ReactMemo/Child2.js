import React from "react";
export default React.memo(function Child2(props) {
  return (
    <div>
      <span>我是不会变化的组件</span>
      <span>{props.string}</span>
    </div>
  );
});
