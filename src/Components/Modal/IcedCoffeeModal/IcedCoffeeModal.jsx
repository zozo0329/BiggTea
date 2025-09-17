import React from "react";
import PugIcon from "../../../assets/Icons/PugLogo-removebg-preview.png";
import IcedCoffeeFlavors from "../../Main/Flavors/IcedCoffeeFlavors";
import IcedCoffeeCard from "../../Main/DrinkItems/CardItems/IcedCoffeeCard";
const IcedCoffeeModal = () => {
  return (
    <div>
      <button
        className=" cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://thewanderlustkitchen.com/wp-content/uploads/2015/02/boozy-iced-coffee-2-square-1200.jpg')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("IcedCoffee").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Iced Coffee</div>
      </button>
      <dialog id="IcedCoffee" className="modal">
        <div className="modal-box flex flex-wrap items-center justify-center gap-10 bg-[#ffe2a4] max-w-2xl max-[600px]:max-w-sm">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex items-center gap-3">
              <img src={PugIcon} alt="Pug Logo" className="w-[80px]" />
              <h1 className="text-[35px]  font-bold text-[#5e3d1e] font-sans cursor-default">
                Big Tea
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {IcedCoffeeFlavors.map((flavors) => (
                <IcedCoffeeCard
                  key={flavors.id}
                  id={flavors.id}
                  name={flavors.name}
                  description={flavors.description}
                  medium={flavors.medium}
                  large={flavors.large}
                  image={flavors.image}
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

export default IcedCoffeeModal;
