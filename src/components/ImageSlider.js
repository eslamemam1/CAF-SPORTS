import React from "react";
import Slider from "react-slick";
import SectionOneHomePage from "./sectionOneHomePage/SectionOneHomePage";
import HomePageBgTwo from "./sectionOneHomePage/HomePageBgTwo";
import HomePageBgThree from "./sectionOneHomePage/HomePageBgThree";
import HomePageBgFour from "./sectionOneHomePage/HomePageBgFour";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider className="z-0" {...settings}>
            <SectionOneHomePage/>
            <HomePageBgTwo/>
            <HomePageBgThree/>
            <HomePageBgFour/>
        </Slider>
  );
};

export default ImageSlider;
