import React from "react";
import { NavLink } from "react-router-dom";
import Vector from "../imges/Vector.svg";
import Vector2 from "../imges/Vector2.svg";
import phone from "../imges/phone.png";
import mail from "../imges/message.png";
import location from "../imges/location.png";
import FooterLogo from "../imges/FooterLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { t, i18n } = useTranslation();
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const phoneNumber = "123456789";
  return (
    <div className=" min-h-[40vh] bg-black relative">
      <img
        src={Vector}
        alt="logo"
        className=" sm:w-[100px] w-[90px] absolute"
      />
      <div className=" flex flex-col sm:flex-row gap-5 w-[90%] sm:w-[85%] m-auto pt-10">
        <div className=" flex items-center sm:items-start flex-col w-full sm:w-[33.3%]">
          <div className=" h-[100px] flex items-center">
            <div>
              <img src={FooterLogo} alt="FooterLogo" className="w-[170px]" />
            </div>
          </div>
          {/**-------------------- */}
          <div className=" flex items-center">
            <p className=" text-sm font-light sm:text-start text-center text-white">
              From generating entire sales sequences in minutes topersonalizing
              LinkedIn InMail messages
            </p>
          </div>
          <div className=" flex gap-3 mt-5 sm:pt-0 items-center">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-[30px] h-[50px]  text-white" />
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-[30px] h-[50px] text-white" />
            </a>
            <a
              href="tel:+1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="w-[30px] h-[50px] text-white" />
            </a>
          </div>
        </div>
        {/**-------------------- */}
        <div className=" flex items-center flex-col w-full sm:w-[33.3%]">
          <p className=" text-green-700 font-medium mt-4 text-lg">
            Quick Links
          </p>
          <ul
            className={
              i18n.language === "en"
                ? " flex flex-row mt-2 items-start sm:flex-col gap-5"
                : " flex flex-row mt-2 items-start sm:flex-col gap-5"
            }
          >
            <li className=" font-normal text-xs sm:text-sm text-[#ffffff]">
              <NavLink
                element={props.togol2}
                onClick={topFunction}
                className=""
                to={"/CAF-SPORTS"}
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="font-normal text-xs sm:text-sm text-[#ffffff]">
              <NavLink onClick={topFunction} className=" " to={"/About"}>
                {t("About Us")}
              </NavLink>
            </li>

            <li className="font-normal text-xs sm:text-sm text-[#fff]">
              <NavLink onClick={topFunction} className="" to={"/Projects"}>
                {t("Our Projects")}
              </NavLink>
            </li>
            <li className="font-normal text-xs sm:text-sm text-[#fff]">
              <NavLink onClick={topFunction} className="" to={"/Contact"}>
                {t("Contact Us")}
              </NavLink>
            </li>
          </ul>
        </div>
        {/**-------------------- */}
        <div className=" flex items-center flex-col w-full sm:w-[33.3%]">
          <p className="text-green-700 font-medium md:pr-[115px] mt-4 text-lg">Reach Us</p>
          <ul
            className={
              i18n.language === "en"
                ? " flex flex-row flex-wrap mt-2 justify-center items-start sm:flex-col gap-2 sm:gap-5"
                : " flex flex-row flex-wrap mt-2 justify-center items-start sm:flex-col gap-2 sm:gap-5:"
            }
          >
            <div className="sm:ml-3 flex gap-2 items-center">
              <img src={mail} alt="mail"className=" w-[20px] sm:w-[25px]" />
              <li className="font-normal text-xs sm:text-sm text-start sm:w-[170px] text-[#fff]">
                Mohamedobrahim@gmail.com
              </li>
            </div>
            <div className="sm:ml-3 flex gap-2 items-center text-start">
              <img src={phone} alt="mail" className=" w-[20px] sm:w-[25px]"/>
              <li className="font-normal text-xs sm:text-sm sm:w-[170px] text-[#fff]">
                +99926528520
              </li>
            </div>
            <div className="sm:ml-2 flex sm:gap-2 items-center">
              <img src={location} className=" w-[20px] sm:w-[25px]" alt="mail" />
              <li className="font-normal text-xs sm:text-sm text-start sm:w-[170px] text-[#fff]">
              United Arab Emirates
              </li>
            </div>
          </ul>
        </div>
        {/**-------------------- */}
      </div>
      <div className="w-[80%] sm:w-[85%] m-auto h-[120px] sm:h-[100px] flex items-center justify-start">
        <p className=" text-sm sm:text-lg font-light text-white">
          Copyright © 2024 All rights reserved | This Website is made by
          Eslam Emam
        </p>
      </div>
      <img
        src={Vector2}
        alt="logo"
        className=" sm:w-[100px] w-[90px] absolute bottom-0 right-0 "
      />
    </div>
  );
};

export default Footer;
