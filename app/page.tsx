import { dbGetTodos } from "@/lib/todos";
import Image from "next/image";

export default async function Home() {
  const todos = await dbGetTodos();
  return (
    <main className="flex flex-col flex-nowrap items-center pt-11">
      <h1> TODO LIST </h1>
      <form className="p-3 ">
        <input
          type="text"
          name="What"
          className="border border-black p-1 mr-2 rounded"
        ></input>
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.what}</li>
        ))}
      </ul>
    </main>
  );
}
