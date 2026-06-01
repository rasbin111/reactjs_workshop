import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusHandler() {
    inputRef?.current?.focus();
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusHandler}>Focus the input </button>
    </div>
  );
};

export default InputFocus;
