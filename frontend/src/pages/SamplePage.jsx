import { useEffect, useState } from 'react';

export default function SamplePage() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('http://localhost:8000/api/sample/')
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);


    return <h1>{message}</h1>
}
