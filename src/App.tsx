import React, { useState } from "react";
import { generateSentence } from "./util";

function App() {
  const [sentence, setSentence] = useState(generateSentence());

  return (
    <div className="App">
      <p>{sentence}</p>
      <button onClick={(e) => setSentence(generateSentence())}>Generate</button>
    </div>
  );
}

export default App;
