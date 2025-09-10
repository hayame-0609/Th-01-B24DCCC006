import React, { useState } from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        margin: "20px auto",
        backgroundColor: color,
        border: "2px solid black",
      }}
    ></div>
  );
}

function ChangeColorApp() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("red");

  return (
    <div style={{ textAlign: "center" }}>
      <ColorBox color={color} />
      {colors.map((c) => (
        <button key={c} onClick={() => setColor(c)} style={{ margin: "5px" }}>
          {c}
        </button>
      ))}
    </div>
  );
}

export default ChangeColorApp;
