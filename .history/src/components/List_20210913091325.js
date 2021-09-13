import React from "react";
import Item from "./Item";

const List = ({setListItem, listItem }) => {
  listItem.forEach((e) => {
    console.log(e.text);
  });
  return (
    <div className="container">
      <ul className="list">
              {listItem.map(item => (
                  <Item listItem={listItem} key={item.id} text={ item.text}/>
              ))}
      </ul>
    </div>
  );
};

export default List;
