import React from "react";
const Form = ({ inputText, setInputText, listItem, setListItem }) => {
  const handleAddItem = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setListItem([
        {
            id: (Date.now() + "").slice(-10),
            status: false,
            text: inputText,
        },
        ...listItem,
    ]);
    setInputText("");
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
        <select name="items" className="select__item">
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
