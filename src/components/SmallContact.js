import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
function SmallContact() {
  const { i18n } = useTranslation();
  const ref = useRef();
  useScrollPosition(({ prevPos, currPos }) => {
    //console.log(currPos.x);
    if (currPos.y <= -60) {
      ref.current.className = "w-5";
      // console.log(currPos.y);
    } else if (currPos.y <= 0 && currPos.y >= -50) {
      ref.current.className = " hidden";
      // console.log("ss");
    }
  });

  return (
    <div ref={ref}>
      <a
        href="#nav"
        className={
          i18n.language === "en"
            ? "fixed right-1 top-[93%]"
            : "fixed left-0 top-[93%]"
        }
      >
        <div
          className={
            i18n.language === "en"
              ? "mr-4 relative bottom-3 w-10 h-10 rounded-full bg-[#44444480]"
              : "ml-4 relative bottom-3 w-10 h-10 rounded-full bg-[#44444480]"
          }
        >
          <i class="fas fa-chevron-up absolute left-[12px] top-[10px] text-[20px] text-white "></i>
        </div>
      </a>
    </div>
  );
}

export default SmallContact;
