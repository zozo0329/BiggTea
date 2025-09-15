import React from "react";
import CartIcon from "../../../assets/Icons/CartIcon.png";
import CartContent from "../../Cart/CartContent";
const CartModal = () => {
  return (
    <div>
      <button
        className="btn bg-[#68420a] text-[white] h-[36px] active:bg-[#945f0e] hover:bg-[#8f5602] transition-all duration-300"
        onClick={() => document.getElementById("navCart").showModal()}
      >
        <span>
          <img
            src={CartIcon}
            alt="CartIcon"
            className="w-[30px] cursor-pointer"
          />
        </span>
        <span>4</span>
      </button>
      <dialog id="navCart" className="modal">
        <div className="modal-box text-black">
          <CartContent />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CartModal;
