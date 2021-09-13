import React from "react";
const Form = () => {
  return (
    <form className="form">
      <input type="text" className="form__input" />
      <button className="form__button" type="submit">
        <i class="fas fa-plus-circle"></i>
          </button>
          <div className='form__select'>
              <select name='items' className='select__item'>
                  <option value='all'>All</option>
                  <option value='completed'>completed</option>
                  <option value='in'>in</option>
            </select>
          </div>
    </form>
  );
};

export default Form;
