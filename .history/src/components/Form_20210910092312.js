import React from "react";
const Form = ({ setInputText, listItem, setListItem }) => {
  const handleAddItem = (e) => {
      setInputText(e.target.value);
      console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preve
    }
  return (
    <form className="form">
      <input type="text" className="form__input" />
      <button className="form__btn btn" onClick={handleAddItem} type="submit">
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
