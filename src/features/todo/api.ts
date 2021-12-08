import { todosApi } from "../../api";
import { AddTodoBody } from "../../components/types";

export function getAllTodos(): any {
  return todosApi.get('/todos')
}

export function removeTodo(id: number) {
  return todosApi.delete(`/todos/${id}`)
}

export function addTodo(data: AddTodoBody) {
  return todosApi.post(`/todos/`, data)
}

export function editTodo(name: string, id: number) {
  return todosApi.patch(`/todos/${id}`, {name})
}
