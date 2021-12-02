export interface ITodo {
    name: string;
    id: number;
    completed: boolean;
}

export interface ITodoFormProps {
    onAdd(title: string): void
}

export type TodoListProps = {
    todos: ITodo[]
}
