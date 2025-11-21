import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkMessage = async () => {
    const response = await 
    fetch("http://127.0.0.1:8000/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text :text}),
    });

    const data = await response.json();
    setResult(data.message);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Real-Time Hate Speech Detector</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      ></textarea>
      <br /><br />
      <button onClick={checkMessage}>Check Message</button>
      <br /><br />
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;