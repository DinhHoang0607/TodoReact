import React from "react";

const Item = (listItem) => {
    return (<li>{listItem.map(e => {
        return e
    })}</li>)
 
};

export default Item;
