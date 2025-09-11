import React from "react";
import PugLogo from "../../../assets/Icons/PugLogo-removebg-preview.png";
import CartModal from "../../Modal/CartModal/CartModal";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#683d04] text-white p-[10px]">
      <div>
        <img
          src={PugLogo}
          alt="PugLogo"
          className="w-[70px] ml-[5px] hover:scale-[1.1] transition-all duration-200 cursor-pointer"
        />
      </div>
      <div>
        <ul className="flex gap-[10px]">
          <a className="btn bg-[#68420a] text-[white] h-[36px] active:bg-[#945f0e] hover:bg-[#8f5602] transition-all duration-300">
            <li>Login</li>
          </a>
          <a className="btn bg-[#68420a] text-[white] h-[36px] active:bg-[#945f0e] hover:bg-[#8f5602] transition-all duration-300">
            <li>Sign Up for free delivery</li>
          </a>
          <CartModal />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
