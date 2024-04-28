const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full h-[200px] md:h-[590px] mt-1"
        >
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/YtVPcYT/Tranquil-Sunset-Digital-Art-Print.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Landscape Painting
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-white">
              ❮
            </a>
            <a href="#slide2" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/DtvHmyz/watercolour-painting-for-beginners-1.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Watercolor Painting
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white">
              ❮
            </a>
            <a href="#slide3" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/zhFTyg2/Abstract-Dreamscape-Oil-Painting.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Oil Painting
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white">
              ❮
            </a>
            <a href="#slide4" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/74PzcVQ/Personalized-Pet-Portrait-Pencil-Sketch.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Portrait Drawing
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-white">
              ❮
            </a>
            <a href="#slide1" className="text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
