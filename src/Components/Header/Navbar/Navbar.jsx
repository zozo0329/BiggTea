import React from "react";
import PugLogo from "../../../assets/Icons/PugLogo-removebg-preview.png";
import CartModal from "../../Modal/CartModal/CartModal";
import NavStyle from "./Navbar.module.css";
import PugSound from "../../../assets/Sounds/PugSound2.mp3";
const Navbar = () => {
  const clickHandler = () => {
    console.log("Clicked");
    const clickSound = new Audio(PugSound);
    clickSound.play();
  };
  return (
    <div className="fixed top-0 left-0 z-1 w-screen">
      <div className={NavStyle.default}>
        <div>
          <img
            src={PugLogo}
            alt="PugLogo"
            className="w-[70px] ml-[5px] hover:scale-[1.1] transition-all duration-200 cursor-pointer"
            onClick={clickHandler}
          />
        </div>
        <div>
          <ul className="flex gap-[10px] mr-[20px]">
            <a className="btn bg-[#68420a] text-[white] h-[36px] active:bg-[#945f0e] hover:bg-[#8f5602] transition-all duration-300">
              <li>Login</li>
            </a>
            <a
              className={`${NavStyle.signUp} btn bg-[#68420a] text-[white] h-[36px] active:bg-[#945f0e] hover:bg-[#8f5602] transition-all duration-300 `}
            >
              <li>Sign Up for free delivery</li>
            </a>
            <CartModal />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
