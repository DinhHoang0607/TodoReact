import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterList, setFilterList] = useState([]);
 
 const handleFilter=()
  return (
    <div className="App">
      <header>
        <h1>Hoang's Todo</h1>
      </header>
      <Form
        filterList={filterList}
        setFilterList={setFilterList}
        status={status}
        setStatus={setStatus}
        listItem={listItem}
        setListItem={setListItem}
        setInputText={setInputText}
        inputText={inputText}
      />
      <List setListItem={setListItem} listItem={listItem} />
    </div>
  );
}

export default App;
