import React from "react";
import Item from "./Item";

const List = ({ listItem }) => {
  return (
    <div className="container">
      <ul className="list">
        <Item item='aaadddddddddd'/>
        <Item item='aaa'/>
        <Item item='aaa'/>
      </ul>
    </div>
  );
};

export default List;
