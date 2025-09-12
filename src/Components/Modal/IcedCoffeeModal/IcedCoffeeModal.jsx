import React from "react";

const IcedCoffeeModal = () => {
  return (
    <div>
      <button
        className="bg-lime-400 cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://fillicafepk.com/wp-content/uploads/2023/12/Cold-Coffee-1024x808.jpg')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("Iced").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Iced Coffee</div>
      </button>
      <dialog id="Iced" className="modal">
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

export default IcedCoffeeModal;
