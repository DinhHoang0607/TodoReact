import React from "react";

const Item = ({ text, listItem, setListItem }) => {
  
    return (
    <div className="item">
      <li className="item__li" >{text}</li>
      <button className="btn fas fa-check-double"></button>
      <button className="btn fas fa-trash"></button>
    </div>
  );
};

export default Item;
