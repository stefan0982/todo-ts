export interface ITodo {
    title: string;
    id: number
    completed: boolean
}

export interface ITodoFormProps {
    onAdd(title: string): void
}

export type TodoListProps = {
    todos: ITodo[]
    onRemove: ( id: number ) => void
    // onRemove?(id: number): void
}
