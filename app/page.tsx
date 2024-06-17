import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { dbGetTodos } from "@/lib/todos";
 
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 0;

export default async function Home() {
  const todos = await dbGetTodos();
  return (
    <main className="flex flex-col flex-nowrap items-center pt-11">
      <h1> TODO LIST </h1>
       <TodoForm></TodoForm>
      <ul className="max-w-lg">
        {todos.map((todo) => (
           <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))}
      </ul>
    </main>
  );
}
