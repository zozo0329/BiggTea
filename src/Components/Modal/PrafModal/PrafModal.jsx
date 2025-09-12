import React from "react";

const PrafModal = () => {
  return (
    <div>
      <button
        className="cursor-pointer rounded-[10px] w-[300px] h-[300px] text-4xl bg-[url('https://media.istockphoto.com/photos/iced-coffee-mocha-on-wooden-working-space-background-and-blur-picture-id1328259165?b=1&k=20&m=1328259165&s=170667a&w=0&h=rGgUaSVqEhpvoiDDvsi1XWuj7M9qrnhA8vq86w_Y8sg=')] bg-cover bg-center hover:scale-[1.1] transition-all duration-400"
        onClick={() => document.getElementById("praf").showModal()}
      >
        <div className="text-white bg-[#00000065] p-3">Praf</div>
      </button>
      <dialog id="praf" className="modal">
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

export default PrafModal;
