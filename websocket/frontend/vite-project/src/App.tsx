import {useRef, useEffect, useState} from 'react';
import './App.css'

function App() {

    const websocket = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const sock = new WebSocket("ws://localhost:8080/counterConnect");
        if (sock === undefined || sock === null) {
            console.log("Socket not connected");
        } else {
            websocket.current = sock
            websocket.current.onopen = () => console.log("Connected to counterConnect");

            websocket.current.onmessage = (event) => {
                setCount(parseInt(event.data))
            }

            return () => {
                websocket.current.close()
            }
        }


    }, [])
  return (
    <>
        {count}
    </>
  )
}

export default App
