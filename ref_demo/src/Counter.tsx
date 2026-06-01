import { useRef } from "react";

const Counter = () => {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("Click Count: " + ref.current);
  }
  return (
    <div>
      <button onClick={handleClick}> Update Counter </button>
    </div>
  );
};

export default Counter;
