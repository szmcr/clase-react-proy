
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { Users } from '../components/Users'
import { AppLayout } from '../components/AppLayout'
import { Todos } from '../components/Todos'

export const AppRouter = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </AppLayout>
    )
}
