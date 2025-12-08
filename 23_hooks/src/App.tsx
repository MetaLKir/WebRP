import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [isIntervalActive, setIsIntervalActive] = useState<boolean>(true);

    const handleUnmounted = (): void => {
        setIsIntervalActive(false);
    }

    useEffect(() => {
        console.log("Functional component mounted \\m/")
    }, []); // initial event

    useEffect(() => {
        console.log("Functional component updated .!.")
    }); // all events

    useEffect(() => {
        if(!isIntervalActive) return;
        console.log("Func interval active");
        const id = setInterval(() => {
            console.log("tick");
        }, 1000);
        return () => {
            console.log("unmounted");
            clearInterval(id);
        }
    }, [isIntervalActive]);

    return (
        <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={handleUnmounted}>unmounted</button>
            </div>
        </>
    )
}

export default App
