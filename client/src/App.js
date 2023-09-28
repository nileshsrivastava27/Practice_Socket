import io from "socket.io-client"
import { useEffect, useState } from "react";

const socket = io.connect("https://localhost:3001")

function App() {
  const [message, setMessage] = useState("");
  const [messageRecieved, setMessageRecieved] = useState("")
  const sendMesage = () =>{
    socket.emit("send_message", { message });
  };

  useEffect(()=>{
    socket.on("recieved message", (data)=>{ 
      setMessageRecieved(data.message);
    })
  }, [socket]);


  return (
    <div className="App">
        <input placeholder = "Message..." onChange={(event)=>{
          setMessage(event.target.value);
        }}/>
        <button onClick={sendMesage}> Send Message</button>
        <h1>Message Recieved:</h1>
        {messageRecieved}
    </div>
  );
}

export default App;
