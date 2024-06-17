"use client";
import { actionToggleTodoDone } from "@/actions/todos";
import { Todo } from "@/lib/todos";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li
      className="hover:bg-slate-600 px-4 py-1 cursor-pointer rounded-full flex flex-row gap-2 hover:text-zinc-100"
      key={todo.id}
      onClick={() => actionToggleTodoDone(todo.id)}
    >
      <input type="checkbox" checked={todo.done} />
      <span
        className={
          todo.done ? "line-through text-zinc-600 hover:text-zinc-100" : ""
        }
      >
        {todo.what}
      </span>
    </li>
  );
}
