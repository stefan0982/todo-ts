export interface ITodo {
    name: string;
    id: number;
    completed: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export type TodoListProps = {
    handleEditItem: (payload: TodoBody) => void
}

export interface AddTodoBody {
    name: string;
}

export interface EditTodoBody {
    name: string;
    id: number
}

export interface TodoBody {
    name: string;
    id?: number
}

export interface TodoFormProps {
    edit?: boolean
    value?: string
    id?: number
    toggleEditable?: () => void
    handleFormSubmit: (payload: TodoBody) => void
}

export interface TodoItemProps {
    name: string
    id: number
    handleEditItem: (payload: TodoBody) => void
}
