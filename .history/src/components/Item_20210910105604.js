import React from "react";

const Item = ({listItem) => {
    return (<li>{listItem.map(e => {
        return e.target.value
    })}</li>)
 
};

export default Item;
