import React from "react";
import Carousel from "./Carousel/Carousel";
import DrinkItems from "./DrinkItems/DrinkItems";

const Main = () => {
  return (
    <div>
      <div className=" h-[23px] w-screen">
        <div>TESTING</div>
      </div>
      <Carousel />
      <div>
        <DrinkItems />
      </div>
    </div>
  );
};

export default Main;
