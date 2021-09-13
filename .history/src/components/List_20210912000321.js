import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  return (
    <div className="container">
      <ul className="list">
              <Item item={listItem.forEach(e => {
                   e.text;
              })}/>
      </ul>
    </div>
  );
};

export default List;
