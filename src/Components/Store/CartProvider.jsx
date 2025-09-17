import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = { items: [], totalAmount: 0 };
const reduLogic = (state, action) => {
  console.log(action, "ACTION");
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.items.price * action.items.amount;

      const existingItemIndex = state.items.findIndex(
        (drink) =>
          drink.id === action.items.id && drink.size === action.items.size
      );
      let updatedItems;

      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.items.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // add new item
        updatedItems = state.items.concat(action.items);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id && item.size === action.size
      );

      if (existingCartItemIndex === -1) {
        return state;
      }

      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => !(item.id === action.id && item.size === action.size)
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(reduLogic, initialState);
  console.log(itemState.items, "ITEEEEEEEEEEEMSSS");
  const addHandler = (items) => {
    console.log(items, "ITEMS OF MILKTEA");
    dispatchItem({ type: "ADD", items });
  };
  const removeHandler = (id, size) => {
    console.log("Item Removed");
    dispatchItem({ type: "REMOVE", id, size });
  };

  const drinksData = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
  };
  return <CartContext value={drinksData}>{props.children}</CartContext>;
};

export default CartProvider;
