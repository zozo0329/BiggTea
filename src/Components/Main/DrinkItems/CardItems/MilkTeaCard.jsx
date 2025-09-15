import React from "react";

const MilkTeaCard = ({ name, description, image, medium, large }) => {
  return (
    <div className="card bg-base-100 w-60 shadow-sm">
      <figure>
        <img src={image} alt="Hokaido image" className="h-[200px] w-[100%]" />
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
            <button className="btn bg-[#b9822e] text-white font-[760] hover:bg-[#a36f21] active:bg-[#db8400]">
              M
            </button>
            <button className="btn bg-[#b9822e] text-white font-[760] hover:bg-[#a36f21] active:bg-[#db8400]">
              L
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilkTeaCard;
