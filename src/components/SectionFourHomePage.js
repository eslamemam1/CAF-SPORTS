import React from "react";
import backgroubdSectionFour from "../imges/backgroubdSectionFour.svg";
import Vector from "../imges/Vector.svg";
import design1 from "../imges/design1.png";
import target1 from "../imges/target1.jpg";
import renovation1 from "../imges/renovation1.jpg";
import sketch1 from "../imges/sketch1.jpg";
import Gallery from "./Gallery";
import Numbers from "./Numbers";
import OurPartener from "./new/OurPartener";
import { useTranslation } from "react-i18next";
const SectionFourHomePage = () => {
  const { t } = useTranslation();
  return (
    <div
      className=" style-blend-mode-for-sectionFour h"
      style={{
        backgroundImage: `url(${backgroubdSectionFour})`,
      }}
    >
      <div className=" flex flex-col lg:flex-row w-[85%] pt-16 items-center justify-between m-auto">
        <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] lg:w-[230px] sm:h-[230px] ">
          <img src={Vector} alt="logo" className=" w-[50px] " />
          <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
            <img src={design1} alt="logo" className=" w-[50px]" />
            <p className=" font-bold text-sm mt-1">{t("Design construction")}</p>
            <p className="font-normal text-sm mt-1">
              {t("Playgrounds and floors are implemented according to standard specifications .")}
            </p>
          </div>
        </div>
        <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] mt-5 lg-mt-0 lg:w-[230px] sm:h-[230px] ">
          <img src={Vector} alt="logo" className=" w-[50px] " />
          <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
            <img src={target1} alt="logo" className=" w-[50px]" />
            <p className=" font-bold text-sm mt-1">{t("Precision")}</p>
            <p className="font-normal text-sm mt-1">
              {t("All products are approved by the International Federation of Tennis and Basketball Players")}
            </p>
          </div>
        </div>
        <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] mt-5 lg-mt-0 lg:w-[230px] sm:h-[230px] ">
          <img src={Vector} alt="logo" className=" w-[50px] " />
          <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
            <img src={renovation1} alt="logo" className=" w-[50px]" />
            <p className=" font-bold text-sm mt-1">{t("Renovation")}</p>
            <p className="font-normal text-sm mt-1">
              {t("All designs are planned from all planning works and reviewed by daily maintenance .")}
            </p>
          </div>
        </div>
        <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] mt-5 lg-mt-0 lg:w-[230px] sm:h-[230px] ">
          <img src={Vector} alt="logo" className=" w-[50px] " />
          <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
            <img src={sketch1} alt="logo" className="w-[50px]" />
            <p className=" font-bold text-sm mt-1">{t("Design")}</p>
            <p className="font-normal text-sm mt-1">
              {t("All products are eco-friendly, animal-safe, and weather-resistant.")}
            </p>
          </div>
        </div>
        {/**---------------------- */}
      </div>
      <div className=" w-[85%] m-auto mt-20 mb-20">
        <Gallery />
      </div>
      <Numbers />
      <OurPartener/>
    </div>
  );
};

export default SectionFourHomePage;
