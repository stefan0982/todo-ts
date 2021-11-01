export interface ITodo {
    title: string;
    id: string
    completed: boolean
}

export interface ITodoFormProps {
    onAdd(title: string): void
}

export type TodoListProps = {
    todos: ITodo[]
    onRemove: ( id: string ) => void
}
