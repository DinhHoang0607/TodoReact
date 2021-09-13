import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  return (
    <div className="container">
      <ul className="list">
              {listItem.map(item => {
                  return <Item item=item/>
        })}
      </ul>
    </div>
  );
};

export default List;
