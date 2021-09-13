import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  listItem.forEach((e) => {
    console.log(e.text);
  });
  return (
    <div className="container">
      <ul className="list">
              {listItem.map(item => (
                  <Item key={item.id} item={ item.text}/>
              ))}
      </ul>
    </div>
  );
};

export default List;
