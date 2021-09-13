import React from "react";
const Form = ({seti}) => {
    const handleAddItem=(e)=>{
        console.log(e.target.value);
    }
  return (
    <form className="form">
      <input onClick={handleAddItem} type="text" className="form__input" />
      <button className="form__btn btn" type="submit">
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
