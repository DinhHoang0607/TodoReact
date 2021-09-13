import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  return (
    <div className="container">
      <ul className="list">
              {listItem.map(item => {
                  return <I
        })}
      </ul>
    </div>
  );
};

export default List;
