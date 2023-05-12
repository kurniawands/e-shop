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
      <div className="relative max-w-3xl max-h-96 mx-auto my-10">
        <Slider {...settings}>
          <div>
            <Image
              className="mx-auto"
              src="/product/Intel Core I9 13900KS.jpg"
              width={400}
              height={300}
              alt="Banner 1"
            />
          </div>
          <div>
            <Image
              className="mx-auto"
              src="/product/Samsung Oddysey Neo G8.jpg"
              width={500}
              height={500}
              alt="Banner 2"
            />
          </div>
          <div>
            <Image
              className="mx-auto"
              src="/product/MSI B760 TOMAHAWK.jpg"
              width={500}
              height={500}
              alt="Banner 3"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
