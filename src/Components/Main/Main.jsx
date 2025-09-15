import React from "react";
import Carousel from "./Carousel/Carousel";
import DrinkItems from "./DrinkItems/DrinkItems";

const Main = () => {
  return (
    <div>
      <Carousel />
      <div>
        <DrinkItems />
      </div>
    </div>
  );
};

export default Main;
