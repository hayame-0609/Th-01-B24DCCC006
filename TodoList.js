import React, { useState } from "react";

function TodoItem({ text }) {
  return <li>{text}</li>;
}

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, i) => (
          <TodoItem key={i} text={t} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;