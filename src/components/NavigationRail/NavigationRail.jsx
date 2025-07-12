import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/text-button.js";
import { MdRipple } from "@material/web/ripple/ripple.js";
import React, { useEffect, useRef } from "react";
import "./NavigationRail.css";

const navItems = [
  { label: "Home", icon: "home" },
  { label: "Projects", icon: "interests" },
  { label: "Skills", icon: "code" },
  { label: "About me", icon: "account_circle" },
  // {label:"", icon:"", , }, // template line
];
function NavigationRail() {
  // const [isSelected, setIsSelected] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  const rippleRefs = useRef([]);

  useEffect(() => {
    rippleRefs.current.forEach((ref) => {
      if (ref) new MdRipple(ref);
    });
  }, []);

  return (
    <nav className=" bg-indigo-100 p-4 h-[100px] rounded-full flex flex-row gap-5 mt-8 justify-self-center ">
      {/* // todo : button anitmation */}
      {navItems.map((item, index) => {
        const isSelected = selectedLabel === item.label;
        return (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <button
              ref={(el) => (rippleRefs.current[index] = el)}
              key={item.label}
              onClick={() => setSelectedLabel(isSelected ? null : item.label)}
              className={` rounded-[16px] cursor-pointer group hover:bg-indigo-300 w-[56px] h-[32px] flex items-center justify-center ${
                isSelected && "bg-indigo-200"
              }`}
            >
              <span
                style={{
                  fontVariationSettings: `'FILL' ${
                    isSelected ? 1 : 0
                  }, 'wght' ${isSelected ? 700 : 700}, 'GRAD' 0, 'opsz' 48`,
                }}
                className={
                  isSelected ? "material-symbols" : "material-symbols-outlined"
                }
              >
                {item.icon}
              </span>
            </button>

            <span className="text-sm">{item.label}</span>
          </div>
        );
      })}
    </nav>
  );
}
export default NavigationRail;
