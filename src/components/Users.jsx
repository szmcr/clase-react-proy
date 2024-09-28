import { useFetch } from "../hooks/useFetch";


export const Users = () => {
    const { data: users, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <>
            <h1>Users</h1>
            <p>Acá abajo apareceran los nuevos usuarios.</p>

            {
                loading ? <p style={{ color: "#c4f9ff" }}>Cargando...</p> : (
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )
}
