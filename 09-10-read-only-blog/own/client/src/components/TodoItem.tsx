import { TodoType } from "@/app/users/[id]/page"

export function TodoItem({
  completed,
  title
}: Pick<TodoType, "completed" | "title">) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>
}
