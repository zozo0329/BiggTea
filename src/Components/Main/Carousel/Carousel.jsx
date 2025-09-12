import React from "react";

const Carousel = () => {
  return (
    <div className="bg-[#ffecb8]">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/035/573/724/small_2x/ai-generated-plastic-cups-of-different-tasty-bubble-tea-on-wooden-background-generative-ai-free-photo.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/five-vibrant-bubble-tea-drinks-each-with-different-color-flavor-burst-with-refreshing-e_924727-67840.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/035/942/175/small_2x/ai-generated-plastic-cups-of-different-tasty-bubble-tea-on-wooden-background-generative-ai-free-photo.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/032/412/751/large_2x/plastic-cups-of-different-tasty-bubble-tea-on-wooden-background-generative-ai-free-photo.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
