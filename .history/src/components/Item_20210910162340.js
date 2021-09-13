import React from "react";

const Item = ({ listItem }) => {
  return (
    <div className="item">
      <li className="item__li">ddddddd
        <button className="btn item__btn">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default Item;
