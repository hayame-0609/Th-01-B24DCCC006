import React, { useState, useEffect } from "react";

function ClockDisplay({ time }) {
  return <h2>{time}</h2>;
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer); // dọn dẹp khi component bị gỡ
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Đồng hồ</h1>
      <ClockDisplay time={time} />
    </div>
  );
}

export default Clock;
