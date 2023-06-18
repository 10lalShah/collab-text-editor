import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Input } from "antd";

const { TextArea } = Input;

function TextEditor() {
  const [socket, setSocket] = useState(null);
  const [inputValue, setInputValue] = useState("")


  useEffect(() => {
    const _socket = io("http://localhost:3001");
    setSocket(_socket);

    return () => {
      _socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.on("incomingChanges", (textChanges) => {
      setInputValue(textChanges);
    });
  }, [socket]);

  const emitChanges = (e) => {
    setInputValue(e.target.value);
    socket.emit("changes", e.target.value);
  };

  return (
    <div>
      <TextArea rows={4} onChange={emitChanges} value={inputValue} />
    </div>
  );
}

export default TextEditor;
