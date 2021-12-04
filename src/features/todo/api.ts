import { todosApi } from "../../api";

export function getAllTodos() {
  return todosApi.get('/todos')
}
