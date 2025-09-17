import React, { useContext } from "react";
import CartIcon from "../../../assets/Icons/CartIcon.png";
import CartContent from "../../Cart/CartContent";
import CartContext from "../../Store/CartContext";
const CartModal = () => {
  const cartCTX = useContext(CartContext);
  console.log(cartCTX, "CART CTX");

  const cartNumber = cartCTX.items.reduce((currNumber, item) => {
    console.log(item, "ITEMMMMMMMMMMM");
    return currNumber + item.amount;
  }, 0);
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
        <span>{cartNumber}</span>
      </button>
      <dialog id="navCart" className="modal">
        <div className="modal-box text-black max-w-[50%]  max-[600px]:max-w-[70%]">
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
