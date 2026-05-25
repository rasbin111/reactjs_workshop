import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./app/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                value: {count}
            </div>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}> Increment </button>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}> Decrement </button>
        </div>
    );
}

export default Counter;
