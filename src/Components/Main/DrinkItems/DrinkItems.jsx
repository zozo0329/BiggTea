import React from "react";
import DrinkStyle from "./DrinkItems.module.css";
import TeaSelectionModal from "../../Modal/TeaSelectionModal/TeaSelectionModal";
import MilkTeaFlavors from "../Flavors/MilkteaFlavors";
import FrapFlavors from "../Flavors/FrapFlavors";
import FruitTeaFlavors from "../Flavors/FruitTeaFlavors";
import IcedCoffeeFlavors from "../Flavors/IcedCoffeeFlavors";

const DrinkItems = () => {
  return (
    <div className={DrinkStyle.default}>
      <div className="flex justify-around items-center flex-wrap p-[40px] bg-[#ffecb8] gap-[30px]">
        <TeaSelectionModal
          modalName="milktea"
          DrinksTitle="Milktea"
          modalTitle="Big Tea"
          flavorItem={MilkTeaFlavors}
          backgroundImage="https://i.etsystatic.com/25595529/r/il/1192b3/2963258124/il_794xN.2963258124_pkaj.jpg"
        />
        <TeaSelectionModal
          modalName="Praf"
          DrinksTitle="Frappe"
          modalTitle="Big Tea"
          flavorItem={FrapFlavors}
          backgroundImage="https://w0.peakpx.com/wallpaper/758/658/HD-wallpaper-frappe-cups-cups-frappe-latte-drink.jpg"
        />
        <TeaSelectionModal
          modalName="FruitTea"
          DrinksTitle="Fruit Tea"
          modalTitle="Big Tea"
          flavorItem={FruitTeaFlavors}
          backgroundImage="https://www.bubbletea.com.au/site/images/source/fruit_tea_comboa.jpg"
        />
        <TeaSelectionModal
          modalName="IcedCoffee"
          DrinksTitle="Iced Coffee"
          modalTitle="Big Tea"
          flavorItem={IcedCoffeeFlavors}
          backgroundImage="https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_1000/v1715713152/g5/g5-c-5j1u7cgnp-american-capital-group-inc-non-livcor/g5-cl-1o2abixruv-american-capital-group-inc-non-livcor-west-sacramento-ca/uploads/GettyImages-1476796596_q8wfag.jpg"
        />
      </div>
    </div>
  );
};

export default DrinkItems;
