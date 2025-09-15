import React from "react";
import PugIcon from "../../../assets/Icons/PugLogo-removebg-preview.png";
import FrapCard from "../../Main/DrinkItems/CardItems/FrapCard";
import FrapFlavors from "../../Main/Flavors/FrapFlavors";
const PrafModal = () => {
  return (
    <div>
      <button
        className=" cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://img.freepik.com/premium-photo/international-frappe-coffee-day_862994-45663.jpg')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("Praf").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Frap</div>
      </button>
      <dialog id="Praf" className="modal">
        <div className="modal-box flex flex-wrap items-center justify-center gap-10 bg-[#ffe2a4] max-w-2xl max-[600px]:max-w-sm">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex items-center gap-3">
              <img src={PugIcon} alt="Pug Logo" className="w-[80px]" />
              <h1 className="text-[35px]  font-bold text-[#5e3d1e] font-sans cursor-default">
                Big Tea
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {FrapFlavors.map((flavor) => {
                return (
                  <FrapCard
                    key={flavor.id}
                    name={flavor.name}
                    description={flavor.description}
                    medium={flavor.medium}
                    large={flavor.large}
                    image={flavor.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </div>
  );
};

export default PrafModal;
