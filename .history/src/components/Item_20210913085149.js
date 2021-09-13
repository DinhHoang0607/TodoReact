import React from "react";

const Item = ({ text, listItem, setListItem }) => {
  const handleDelete = (e) => {
    //setListItem(listItem.filter((el) => e.id !== el.id));
      console.log(e.target.closetid);
  };
  return (
    <div className="item">
      <li className="item__li">{text}</li>
      <button className="btn fas fa-check-double"></button>
      <button onClick={handleDelete} className="btn fas fa-trash"></button>
    </div>
  );
};

export default Item;
