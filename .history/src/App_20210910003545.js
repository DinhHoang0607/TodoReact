import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Hoang's Todo{inputText}</h1>
      </header>
      <Form setInputText={setInputText} />
      <List />
    </div>
  );
}

export default App;
