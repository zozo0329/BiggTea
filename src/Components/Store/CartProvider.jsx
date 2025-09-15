import React from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const addHandler = () => {
    console.log("Item Added");
  };
  const removeHandler = () => {
    console.log("Item Removed");
  };

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addHandler,
    removeItem: removeHandler,
  };
  return <CartContext value={cartContext}>{props.children}</CartContext>;
};

export default CartProvider;
