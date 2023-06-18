import React, { useEffect } from "react";
import { io } from "socket.io-client";

function TextEditor() {
  useEffect(() => {
    const socket = io("http://localhost:3001");

    return () => {
      socket.disconnect();
    };
  }, []);
  return <div>TextEditor</div>;
}

export default TextEditor;
 