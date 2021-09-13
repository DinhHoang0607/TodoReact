import React from "react";

const Item = ({ listItem }) => {
  return (
    <div className="item">
      <li className="item__li">
              <button className="btn fas fa-edit">
                  <i class="fas fa-edit"></i>
                  <i class="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default Item;