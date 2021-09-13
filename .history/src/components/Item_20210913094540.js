import React from "react";

const Item = ({ item, text, listItem, setListItem }) => {
  const handleDelete = () => {
    setListItem(listItem.filter((el) => item.id !== el.id));
    console.log(item);
  };
    const handleCompleted = () => {
        listItem.map(e => {
          if(item.id===)
      })
  };
  return (
    <div className="item">
      <li className="item__li">{text}</li>
      <button
        oncClick={handleCompleted}
        className="btn fas fa-check-double"
      ></button>
      <button onClick={handleDelete} className="btn fas fa-trash"></button>
    </div>
  );
};

export default Item;
