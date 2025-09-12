import React from "react";
import MilkteaModal from "../../Modal/MilkteaModal/MilkteaModal";
import FruitTeaModal from "../../Modal/FruitTeaModal/FruitTeaModal";
import PrafModal from "../../Modal/PrafModal/PrafModal";
import IcedCoffeeModal from "../../Modal/IcedCoffeeModal/IcedCoffeeModal";

const Milktea = () => {
  return (
    <div className="flex justify-around items-center p-[50px] bg-[#ffecb8]">
      <MilkteaModal />
      <PrafModal />
      <FruitTeaModal />
      <IcedCoffeeModal />
    </div>
  );
};

export default Milktea;
