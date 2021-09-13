import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
    listItem.forEach(e => {
        console.log(e.);
    })
  return (
    <div className="container">
      <ul className="list">
              <Item item={listItem.forEach(e => {
                  return e.text;
              })} />
              
      </ul>
    </div>
  );
};

export default List;
