import React from "react";

const Item = ({ item,text, listItem, setListItem }) => {
  const handleDelete = () => {
    setListItem(listItem.filter((el) => item.id !== el.id));
      console.log(item);
    };
    const handleCompleted = () => {
        
    }
  return (
    <div className="item">
      <li className="item__li">{text}</li>
      <button oncCl className="btn fas fa-check-double"></button>
      <button onClick={handleDelete} className="btn fas fa-trash"></button>
    </div>
  );
};

export default Item;
