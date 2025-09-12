import React from "react";

const MilkteaModal = () => {
  return (
    <div>
      <button
        className=" cursor-pointer  rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://media1.orlandoweekly.com/orlando/imager/u/original/29330718/screen_shot_2021-05-17_at_3.31.17_pm.png')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("milktea").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Milk Tea</div>
      </button>
      <dialog id="milktea" className="modal">
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

export default MilkteaModal;
