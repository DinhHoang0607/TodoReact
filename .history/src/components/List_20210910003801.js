import React from "react";

const List = ({inputText}) => {
  return (
    <div className="container">
          <ul className="list">{ inputText}</ul>
    </div>
  );
};

export default List;
