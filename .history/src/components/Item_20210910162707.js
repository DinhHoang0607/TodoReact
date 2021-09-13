import React from "react";

const Item = ({ listItem }) => {
  return (
    <div className="item">
      <li className="item__li">ddddddd
        <button className="btn item__btn">
          <button className="btn fas fa-edit"></button>
          <button className="fas fa-trash"></button>
        </button>
      </li>
    </div>
  );
};

export default Item;
