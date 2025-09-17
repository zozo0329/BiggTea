import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
const CartContent = () => {
  const cartCtx = useContext(CartContext);
  const itemCTX = cartCtx.items;

  const plusHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const minusHandler = (id, size) => {
    cartCtx.removeItem(id, size);
  };

  return (
    <div className=" flex flex-col gap-[20px] bg-white p-[20px] rounded-[10px]">
      <div>
        {itemCTX.map((drinkItem) => (
          <CartItem
            key={`${drinkItem.id} ${drinkItem.size}`}
            name={drinkItem.name}
            image={drinkItem.image}
            price={drinkItem.price}
            id={drinkItem.id}
            amount={drinkItem.amount}
            size={drinkItem.size}
            plusHandler={() => {
              plusHandler(drinkItem);
            }}
            minusHandler={() => {
              minusHandler(drinkItem.id, drinkItem.size);
            }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center text-[20px]">
        <span className="cursor-default">Total Amount:</span>
        <span className="bg-[#e7c478] p-[5px] radius rounded-[10px] cursor-default">
          ₱{cartCtx.totalAmount}
        </span>
      </div>
      <button className="btn text-[20px] bg-[#ffba52] text-white hover:bg-[#f3b250] rounded-[10px]">
        Order
      </button>
    </div>
  );
};

export default CartContent;
