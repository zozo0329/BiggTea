import React from "react";
import PugIcon from "../../../assets/Icons/PugLogo-removebg-preview.png";
import FlavorCard from "../../UI/CardSection/FavorCard";
const TeaSelectionModal = ({
  DrinksTitle,
  modalTitle,
  flavorItem,
  backgroundImage,
  modalName,
}) => {
  return (
    <div>
      <button
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={`cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl  bg-cover bg-center hover:scale-[1.1] transition-all duration-400`}
        onClick={() => document.getElementById(modalName).showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">{DrinksTitle}</div>
      </button>

      <dialog id={modalName} className="modal">
        <div className="modal-box flex flex-wrap items-center justify-center gap-10 bg-[#ffe2a4] max-w-2xl max-[600px]:max-w-sm">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex items-center gap-3">
              <img src={PugIcon} alt="Pug Logo" className="w-[80px]" />
              <h1 className="text-[35px]  font-bold text-[#5e3d1e] font-sans cursor-default">
                {modalTitle}
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {flavorItem.map((flavor) => (
                <FlavorCard
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

export default TeaSelectionModal;
