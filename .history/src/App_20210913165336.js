import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [listItem, status]);
  //handleFilter
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilterList(listItem.filter((item) => item.done === true));
        break;
      case "inProcess":
        setFilterList(listItem.filter((item) => item.done === false));
        break;
      default:
        setFilterList(listItem);
        break;
    }
  };
  //local Storage
  const saveLocalStorage = () => {
    localStorage.setItem()
  }
  return (
    <div className="App">
      <header>
        <h1>Hoang's Todo</h1>
      </header>
      <Form
        setStatus={setStatus}
        listItem={listItem}
        setListItem={setListItem}
        setInputText={setInputText}
        inputText={inputText}
      />
      <List filterList={filterList} setListItem={setListItem} listItem={listItem} />
    </div>
  );
}

export default App;
