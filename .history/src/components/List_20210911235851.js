import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  return (
    <div className="container">
      <ul className="list">
              <Item item={listItem.forEach(item => {
                  return item;
              })}/>
      </ul>
    </div>
  );
};

export default List;
