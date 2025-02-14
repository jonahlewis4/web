import {useEffect, useState} from "react"
import {MessageSchema} from './proto/response_pb.ts'
import {fromBinary} from '@bufbuild/protobuf'
import axios from "axios"
function App() {
    const [message, setMessage] = useState("")
    const [num, setNum] = useState<number>(-1)
    const getResponse = async () => {
        const response = await axios.get('http://localhost:8080/response', {responseType: "arraybuffer"})
        if (response === null){
            setMessage("")
        } else {
            const data = new Uint8Array(response.data)
            const message = fromBinary(MessageSchema, data);
            setMessage(message.message)
            setNum(message.num)
        }

    }
    useEffect(() => {
        (async () => {await getResponse()})()
    }, []);
    return <>
        {message}
        <br/>
        {num}

    </>
}

export default App
