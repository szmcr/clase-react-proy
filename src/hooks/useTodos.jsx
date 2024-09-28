import { useState } from "react";

const initialState = [
    { id: 1, title: 'Lavar los platos', completed: false },
    { id: 2, title: 'Hacer la tarea de estructuras', completed: true },
    { id: 3, title: 'Lo que sea', completed: false },
];

export const useTodos = () => {

    const [todos, setTodos] = useState(initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleCreateTodo = (e) => {
        e.preventDefault();

        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                title: newTodo,
                completed: false
            }
        ]);

        setNewTodo('');
    }

    const handleChangeTodoStatus = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }

            return todo;
        });

        setTodos(newTodos);
    }

    return {
        todos,
        newTodo,
        setNewTodo,
        handleCreateTodo,
        handleChangeTodoStatus
    }
}
