import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Contador: {counter}</p>
            <button onClick={increment}>Incrementar</button>
        </>
    )
}
