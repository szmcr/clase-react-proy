import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className='top_nav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="todos">Todos</Link>
                </li>
                <li>
                    <Link to="users">Users</Link>
                </li>
            </ul>
        </nav>
    )
}
