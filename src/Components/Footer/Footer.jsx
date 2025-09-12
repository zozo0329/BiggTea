import React from "react";
import Socials from "./Socials/Socials";
import FooterContent from "./FooterContent/FooterContent";

const Footer = () => {
  return (
    <div className="bg-[#f1cb95]">
      <Socials />
      <FooterContent />
      <div>
        <div className="flex justify-end mr-[40px] p-[20px]">
          <p className="text-[#7E3E00] cursor-default">© 2025 Big Tea</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
