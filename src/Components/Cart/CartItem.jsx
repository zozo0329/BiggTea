import React from "react";
import CartContext from "../Store/CartContext";

const CartItem = ({
  name,
  image,
  price,
  amount,
  size,
  plusHandler,
  minusHandler,
}) => {
  return (
    <div className="flex justify-between items-center  border-b-2 p-[10px]  max-[600px]:flex-col ">
      <div className="flex items-center gap-[10px]  max-[600px]:flex-col">
        <div>
          <img
            className="w-[100px] h-[100px] rounded-[10px]"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <h2 className="font-[500] text-[20px] cursor-default">{name}</h2>
          <h3 className="text-[15px] font-[400]">Size: {size}</h3>
          <div className="flex gap-[20px] flex-row items-center">
            <span className="text-[16px] font-[500] cursor-default">
              ₱{price}
            </span>
            <span className="text-[16px] p-[3px] border-[1px] rounded-[5px] cursor-default max-[600px]:p-[5px]">
              x{amount}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <button
          className="btn btn-outline text-center text-[30px] max-[600px]:mt-[10px]"
          onClick={minusHandler}
        >
          -
        </button>
        <button
          className="btn btn-outline text-center text-[20px] max-[600px]:mt-[10px]"
          onClick={plusHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
