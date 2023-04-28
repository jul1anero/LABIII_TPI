import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }
  function restOne() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={addOne} disabled={count >= 10}>
        +
      </button>
      <h3>{count}</h3>
      <button onClick={restOne} disabled={count === 0}>
        -
      </button>
    </div>
  );
}

export default Button;
