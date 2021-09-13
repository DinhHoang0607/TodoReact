import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  return (
    <div className="container">
      <ul className="list">
              <Item item={listItem.map(item => {
                  return 
              })}/>
      </ul>
    </div>
  );
};

export default List;
