import {useEffect, useState} from "react"
import axios from "axios"
function App() {
    const [message, setMessage] = useState("")

    const getResponse = async () => {
        const response = await axios.get('http://localhost:8080/response')
        if (response === null){
            setMessage("")
        } else {
            setMessage(response.data)
        }

    }
    useEffect(() => {
        (async () => {await getResponse()})()
    }, []);
    return <>
        {message}
    </>
}

export default App
