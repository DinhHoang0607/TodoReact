import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Hoang's Todo</h1>
      </header>
      <Form listItem setInputText={setInputText} />
      <List inputText={inputText} />
    </div>
  );
}

export default App;
