import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Hoang's Todo</h1>
      </header>
      <Form setInputText/>
      <List />
    </div>
  );
}

export default App;
