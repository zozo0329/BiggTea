import React from "react";
const Carousel = () => {
  return (
    <div className="max-[600px]:hidden">
      <div className="bg-[#ffecb8] mt-[50px]">
        <div className="carousel w-full">
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
              src="https://www.pjponline.com/wp-content/uploads/2015/01/shutterstock_430178011-600x235.jpg"
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
              src="https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-a-glass-of-iced-coffee-is-placed-on-the-fence-against-image_15673440.jpg"
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
              src="https://www.stonehouserestaurants.co.uk/content/dam/stonehouse/images/2022/drinks/stonehouse-html-image-sodas.jpg.asset/1671529684788.jpg"
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
    </div>
  );
};

export default Carousel;
