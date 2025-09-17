import React from "react";
import MilkTeaCard from "../../Main/DrinkItems/CardItems/MilkTeaCard";
import MilkteaFlavors from "../../Main/Flavors/MilkteaFlavors";
import PugIcon from "../../../assets/Icons/PugLogo-removebg-preview.png";
const MilkteaModal = () => {
  return (
    <div>
      <button
        className=" cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://media1.orlandoweekly.com/orlando/imager/u/original/29330718/screen_shot_2021-05-17_at_3.31.17_pm.png')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("milktea").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Milk Tea</div>
      </button>
      <dialog id="milktea" className="modal">
        <div className="modal-box flex flex-wrap items-center justify-center gap-10 bg-[#ffe2a4] max-w-2xl max-[600px]:max-w-sm">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex items-center gap-3">
              <img src={PugIcon} alt="Pug Logo" className="w-[80px]" />
              <h1 className="text-[35px]  font-bold text-[#5e3d1e] font-sans cursor-default">
                Big Tea
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {MilkteaFlavors.map((flavor) => (
                <MilkTeaCard
                  key={flavor.id}
                  id={flavor.id}
                  name={flavor.name}
                  description={flavor.description}
                  image={flavor.image}
                  medium={flavor.medium}
                  large={flavor.large}
                />
              ))}
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

export default MilkteaModal;
