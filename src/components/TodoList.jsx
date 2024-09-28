
export const TodoList = ({ todo, handleChangeTodoStatus }) => {
    return (
        <div className="todo">
            <input type="checkbox" value={todo.completed} onChange={() => handleChangeTodoStatus(todo.id)} defaultChecked={todo.completed} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</span>
        </div>
    )
}
