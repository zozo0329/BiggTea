import React from "react";
import PugLogo from "../../../assets/Icons/PugLogo-removebg-preview.png";
import FbIcon from "../../../assets/Icons/fbIcon.png";
import IgIcon from "../../../assets/Icons/igIcon.png";
const Socials = () => {
  return (
    <div className="p-[35px] flex flex-col  gap-[20px] border-b-1 border-[#7E3E00]">
      <div className="flex justify-between items-center">
        <div>
          <a>
            <img
              src={PugLogo}
              alt="PugLogo"
              className="w-[70px] cursor-pointer"
            />
          </a>
        </div>
        <div className="flex gap-[10px]">
          <a className="cursor-pointer">
            <img src={FbIcon} alt="Facebook" />
          </a>
          <a className="cursor-pointer">
            <img src={IgIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
