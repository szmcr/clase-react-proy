import { Navbar } from "./Navbar"

export const AppLayout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main >
                {children}
            </main>
            <footer>
                <p>Este es el footer</p>
            </footer>
        </div>
    )
}
