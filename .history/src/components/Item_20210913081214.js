import React from "react";

const Item = ({ text }) => {
  return (
    <div className="item">
      <li className="item__li" >{item}</li>
      <button className="btn fas fa-check-double"></button>
      <button className="btn fas fa-trash"></button>
    </div>
  );
};

export default Item;
