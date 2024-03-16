import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function RightSideBar(props) {
  const { t } = useTranslation();
  const topFunction = ()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <aside
      className={
        props.togol2 === true
          ? "viewForAr view fixed z-20 right-0 top-0 h-screen w-[75%] sm:w-[%50] shadowL"
          : "hideForAr view fixed z-20 right-0 top-0 h-screen w-[75%] sm:w-[%50]"
      }
    >
      <div className=" backgroundColorSideBar">
        <div className=" flex flex-col items-center text-black h-screen">
          <i
            onClick={() => {
              props.setTogol2(!props.togol2);
            }}
            class="far fa-times-circle text-[#686868] text-[25px] absolute left-[15px] top-[6px] x cursor-pointer"
          ></i>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
            }}
            className="navlinkAr bg-[#f0f0f0]"
            to={"#"}
          >
            <p>{t("Close")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction()
            }}
            className="navlinkAr"
            to={"/"}
          >
            <p>{t("Home")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction()
            }}
            className="navlinkAr"
            to={"/About"}
          >
            <p>{t("About Us")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction()
            }}
            className="navlinkAr"
            to={"/Projects"}
          >
            <p>{t("Our Projects")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction()
            }}
            className="navlinkAr"
            to={"/Contact"}
          >
            <p>{t("Contact Us")}</p>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default RightSideBar;
