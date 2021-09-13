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
                  <Item item={ item.}/>
              ))}
      </ul>
    </div>
  );
};

export default List;
