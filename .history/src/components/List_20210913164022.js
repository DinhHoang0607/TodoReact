import React from "react";
import Item from "./Item";

const List = ({ setListItem, listItem, filterList }) => {
  //   listItem.forEach((e) => {
  //     console.log(e.text);
  //   });
  return (
    <div className="container">
      <ul className="list">
        {filterList.map((item) => (
          <Item
            item={item}
            listItem={listItem}
            setListItem={setListItem}
            key={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
