import React, { useState } from "react";

function StudentCard({ name, age, className }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{name}</h3>
      {showDetail && (
        <p>
          Tuổi: {age}, Lớp: {className}
        </p>
      )}
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
    </div>
  );
}

function StudentList() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "CTK42" },
    { name: "Trần Thị B", age: 21, className: "CTK43" },
    { name: "Lê Văn C", age: 22, className: "CTK44" },
  ];

  return (
    <div>
      {students.map((s, i) => (
        <StudentCard
          key={i}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

export default StudentList;
