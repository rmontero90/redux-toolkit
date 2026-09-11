import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Hello Counter</h2>
      <span>{counter}</span>
      <p>
        <button
          style={{ marginRight: "12px" }}
          type="button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </p>
    </>
  );
}

export default App;
