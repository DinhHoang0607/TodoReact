import React from "react";
import Item from "./Item";

const List = ({ inputText }) => {
  return (
    <div className="container">
      <ul className="list">
        <Item />
      </ul>
    </div>
  );
};

export default List;
