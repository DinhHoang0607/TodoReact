import React from "react";

const Item = ({ item,key }) => {
  return (
    <div className="item">
      <li className="item__li"key={key}>{item}</li>
      <button className="btn fas fa-check-double"></button>
      <button className="btn fas fa-trash"></button>
    </div>
  );
};

export default Item;
