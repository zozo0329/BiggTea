import React from "react";

const CartContent = () => {
  return (
    <div className=" flex flex-col gap-[20px] bg-white p-[20px] rounded-[10px]">
      <div></div>
      <div className="flex justify-between items-center text-[20px]">
        <span className="cursor-default">Total Amount:</span>
        <span className="bg-[#e7c478] p-[5px] radius rounded-[10px] cursor-default">
          ₱11
        </span>
      </div>
      <button className="btn text-[20px] bg-[#ffba52] text-white hover:bg-[#f3b250] rounded-[10px]">
        Order
      </button>
    </div>
  );
};

export default CartContent;
