import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Total Employee : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase Employee</button>
    </div>
  );
};

export default Counter;
