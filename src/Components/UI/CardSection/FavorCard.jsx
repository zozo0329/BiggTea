import React, { useContext } from "react";
import CartContext from "../../../Components/Store/CartContext";
const FlavorCard = ({ name, description, medium, large, image, id }) => {
  const cartCTX = useContext(CartContext);
  const addItem = cartCTX.addItem;
  let amount = 1;
  const mediumHandler = () => {
    +amount + 1;
    addItem({ name, image, medium, id, price: medium, amount, size: "Medium" });
  };
  const largeHandler = () => {
    addItem({ name, image, large, id, price: large, amount, size: "Large" });
  };
  return (
    <div className="card bg-base-100 w-60 shadow-sm">
      <figure>
        <img src={image} alt={name} className="h-[200px] w-[100%]" />
      </figure>
      <div className="card-body text-[#63361d]">
        <h2 className="card-title text-[#63361d]">{name}</h2>
        <p className="text-[#63361d]">{description}</p>
        <p className="text-[#63361d]">
          Medium: {medium} <br />
          Large: {large}
        </p>
        <div className="card-actions justify-between items-center mt-[50px]">
          <div>
            <p className="text-[17px] font-[500] text-[#63361d]">Sizes:</p>
          </div>
          <div className="gap-2 flex items-center">
            <button
              onClick={mediumHandler}
              className="btn bg-[#b9822e] text-white font-[760] hover:bg-[#a36f21] active:bg-[#db8400]"
            >
              M
            </button>
            <button
              onClick={largeHandler}
              className="btn bg-[#b9822e] text-white font-[760] hover:bg-[#a36f21] active:bg-[#db8400]"
            >
              L
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorCard;
