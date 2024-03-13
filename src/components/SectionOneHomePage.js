import backgroundImage from "../imges/backGround.jpg";
import logoForHeroSection from "../imges/logoForHeroSection.svg";
import logoForHeroSection1 from "../imges/logoForHeroSection1.svg";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
const SectionOneHomePage = (props) => {
  const phoneNumber = "123456789";
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // Set initial width
    setWidth(window.innerWidth);

    // Add event listener to update width on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" text-center font-bold text-2xl sm:text-9xl h ">
      <div
        className="style-blend-mode h "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="w-[100%] h-[100vh] flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-[40%] w-[100%] ">
            {width >= "768" ? (
              <div>
                <img
                  src={logoForHeroSection}
                  alt="Logo"
                  className=" w-[30rem] "
                />
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <img
                  src={logoForHeroSection1}
                  alt="Logo"
                  className=" w-[15rem] "
                />
              </div>
            )}
          </div>
          <div className="sm:pl-[50px] pt-10 md:pt-0 sm:pr-[50px] w-[100%] md:w-[60%] flex-col justify-center">
            <p className=" text-4xl lg:text-6xl text-center md:text-left text-white pb-5">
              {t("Sports Flooring")}
            </p>
            <p className=" text-base font-light text-center md:text-left text-white m-auto sm:m-0 w-[90%] lg:w-[80%]">
              {t(
                "Explore our premium sports flooring options at Caf Sports, designed for superior performance and safety. Contact us today for customized solutions and expert guidance"
              )}
            </p>
          </div>
        </div>
        <div className="relative flex w-[85%] m-auto">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-[30px] absolute bottom-5 right-0 text-white" />
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-[30px] absolute bottom-5 right-11 text-white" />
          </a>
          <a
              href="tel:+1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="w-[30px] absolute bottom-5 right-[90px] text-white" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default SectionOneHomePage;