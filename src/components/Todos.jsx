import { useTodos } from "../hooks/useTodos";
import { TodoList } from "./TodoList";

export const Todos = () => {
    const { todos, newTodo, setNewTodo, handleCreateTodo, handleChangeTodoStatus } = useTodos();

    return (
        <>
            <h1>Todos</h1>
            <form onSubmit={handleCreateTodo} className="todo_form">
                <label htmlFor="todo">Cree una tarea: </label>
                <input name="todo" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type="submit" onClick={handleCreateTodo}>Agregar</button>
            </form>

            <h2>Tareas</h2>
            {
                todos.map(todo => (
                    <TodoList key={todo.id} todo={todo} handleChangeTodoStatus={handleChangeTodoStatus} />
                ))
            }
        </>
    )
}
