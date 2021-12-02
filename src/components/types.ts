export interface ITodo {
    name: string;
    id: number;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}

export type TodoListProps = {
    todos: ITodo[]
}
