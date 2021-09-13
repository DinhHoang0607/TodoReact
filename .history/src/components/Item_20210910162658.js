import React from "react";

const Item = ({ listItem }) => {
  return (
    <div className="item">
      <li className="item__li">ddddddd
        <button className="btn item__btn">
          <button className="fas fa-edit"></button>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default Item;
