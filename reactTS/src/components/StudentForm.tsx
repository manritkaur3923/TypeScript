import React, { useState } from "react";
import type { Student } from "../types";

interface StudentFormProps {
  onSubmit(student: Omit<Student, "id" | "isActive" >): void;
//   onSubmit(student: { name: string; age: number; course: string }): void;
}

export function StudentForm({ onSubmit }: StudentFormProps) {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(1);
  const [course, setCourse] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({
      name,
      age,
      course,
    });

    setName("")
    setAge(1)
    setCourse("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label>Age</label>
      <input
        type="number"
        value={age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAge(Number(e.target.value))
        }
      />
      <label>Course</label>
      <input
        type="text"
        value={course}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCourse(e.target.value)
        }
      />

      <button type="submit">Enter Student</button>
    </form>
  );
}
