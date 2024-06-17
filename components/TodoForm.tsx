"use client";
import { actionAddTodo } from "@/actions/todos";
import { useRef } from "react";

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const addTodo = async (formData: FormData) => {
    await actionAddTodo(formData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} className="p-3 " action={addTodo}>
      <input
        type="text"
        name="what"
        className="border border-black p-1 mr-2 rounded text-zinc-900 font-semibold"
      ></input>
      <button>Add</button>
    </form>
  );
}
