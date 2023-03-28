import Image from "next/image";

import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="relative max-w-3xl mx-auto">
        <Slider {...settings}>
          <div>
            <Image
              className="mx-auto"
              src="/favicon.ico"
              width={100}
              height={100}
              alt="Banner 1"
            />
          </div>
          <div>
            <Image
              className="mx-auto"
              src="/logo.png"
              width={100}
              height={100}
              alt="Banner 2"
            />
          </div>
          <div>
            <Image
              className="mx-auto"
              src="/vercel.svg"
              width={100}
              height={100}
              alt="Banner 3"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
