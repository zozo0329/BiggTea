import React from "react";
import MilkteaModal from "../../Modal/MilkteaModal/MilkteaModal";
import FruitTeaModal from "../../Modal/FruitTeaModal/FruitTeaModal";
import PrafModal from "../../Modal/PrafModal/PrafModal";
import IcedCoffeeModal from "../../Modal/IcedCoffeeModal/IcedCoffeeModal";
import DrinkStyle from "./DrinkItems.module.css";

const DrinkItems = () => {
  return (
    <div className={DrinkStyle.default}>
      <div className="flex justify-around items-center flex-wrap p-[40px] bg-[#ffecb8] gap-[30px]">
        <MilkteaModal />
        <PrafModal />
        <FruitTeaModal />
        <IcedCoffeeModal />
      </div>
    </div>
  );
};

export default DrinkItems;
