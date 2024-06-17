"use server";

import { dbAddTodo, dbToggleDone } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function actionAddTodo(formData: FormData) {
  const whatField = formData.get("what");
  if (whatField === null) throw new Error("Missing what field");
  const what = whatField.toString();
  await dbAddTodo(what);
  revalidatePath("/");
}

export async function actionToggleTodoDone(id: number) {
  await dbToggleDone(id);
  revalidatePath("/");
}
