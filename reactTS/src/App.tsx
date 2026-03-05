import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.tsx";
import Person from "./components/Person.tsx";
import { StudentForm } from "./components/StudentForm.tsx";
import type { Student } from "./types.ts";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  function addStudent(studentData: Omit<Student, "id" | "isActive">) {
    const newStudent: Student = {
      id: Date.now(),
      ...studentData,
      isActive: true,
    };

    setStudents((prev)=> [...prev, newStudent])
  }
  return (
    <>
      {/* <h1>Vite + React + TypeScript</h1>
      <Person name="Manrit" age={22} domain="MERN Stack" />
      <div>
        <Counter/> */}

      <div>
        <StudentForm onSubmit={addStudent} />
      </div>
      <div>
        <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.age} - {s.course} - {s.isActive ? "Active" : "Inactive"}
          </li>
        ))}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
