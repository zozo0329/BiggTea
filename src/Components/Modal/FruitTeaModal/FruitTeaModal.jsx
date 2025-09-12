import React from "react";

const FruitTeaModal = () => {
  return (
    <div>
      <button
        className="bg-lime-400 cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://img.freepik.com/premium-photo/refreshing-lemonade-tea-served-plastic-cup-garnished-with-ice-cubes-against-textured-backgr_908985-74042.jpg')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("fruitTea").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Fruit Tea</div>
      </button>
      <dialog id="fruitTea" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default FruitTeaModal;
