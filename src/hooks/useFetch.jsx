import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(
            () => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setData(data);
                        setLoading(false);
                    })
            }, 1000
        )
    }, [url]);

    return {
        data,
        loading
    }
}
