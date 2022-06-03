import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./videoCall.css";
import { useWebSockets } from "./useWebSocket";

// alert("Rerender");
export default function VideoCall() {
  const [message, setMessage] = useState("");
  const {messages : allMessages , send} = useWebSockets(true)
  // sender and message
  return (
    <div className="body">
      <div className="message-container"></div>
      <form className="send-container">
        {/* < type="text" id="message-input"> */}
        {allMessages.map((each) => {
          return (
            <h1>
              {each.sender} {each.message}
            </h1>
          );
        })}
        <TextField
          className="message-input"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="send-button"
          onClick={(e) => {
            e.preventDefault();
            send(message)
            setMessage("");
           setMessage(m => [{ sender: "NGO1", message: message },...m]);
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
