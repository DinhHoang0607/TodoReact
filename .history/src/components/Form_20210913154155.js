import React from "react";
const Form = ({
  filterList,
  setFilterList,
  status,
  setStatus,
  inputText,
  setInputText,
  listItem,
  setListItem,
}) => {
  const handleAddItem = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setListItem([
      {
        id: (Date.now() + "").slice(-10),
        done: false,
        text: inputText,
      },
      ...listItem,
    ]);
    setInputText("");
  };
  const handleSearch = (e) => {
    setStatus(e.target.value);
    setFilterList(listItem);
      console.log(status);
      if (status === "completed") {
          filterList.filter(el=>)
      }
  };
  return (
    <form className="form">
      <input
        value={inputText}
        onChange={handleAddItem}
        type="text"
        className="form__input"
      />
      <button className="form__btn btn" onClick={handleSubmit} type="submit">
        <i class="fas fa-plus-circle"></i>
      </button>
      <div className="form__select">
        <select name="items" className="select__item" onChange={handleSearch}>
          <option value="all" selected="selected">
            All
          </option>
          <option value="completed">Completed</option>
          <option value="inProcess">InProcess</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
