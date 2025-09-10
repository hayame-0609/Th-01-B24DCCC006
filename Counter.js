import React, { useState } from "react";

function DisplayNumber({ value }) {
  return <h2>Giá trị hiện tại: {value}</h2>;
}

function Counter() {
  const [number, setNumber] = useState(2);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <DisplayNumber value={number} />
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

export default Counter;