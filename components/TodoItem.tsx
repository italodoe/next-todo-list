"use client";
import { actionDeleteTodo, actionToggleTodoDone } from "@/actions/todos";
import { Todo } from "@/lib/todos";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li
      className="hover:bg-slate-600 px-4 py-1 cursor-pointer rounded-full flex flex-row gap-2 justify-between items-center hover:text-zinc-100 group"
      key={todo.id}
      onClick={() => actionToggleTodoDone(todo.id)}
    >
      <div className="flex gap-2">
        <input type="checkbox" checked={todo.done} />
        <span
          className={
            todo.done ? "line-through text-zinc-600 hover:text-zinc-100 group-hover:text-zinc-100" : ""
          }
        >
          {todo.what}
        </span>
      </div>

      <span onClick={()=> actionDeleteTodo(todo.id)} className="invisible group-hover:visible hover:bg-red-600 hover:font-black rounded-full px-1.5">&times;</span>
    </li>
  );
}
