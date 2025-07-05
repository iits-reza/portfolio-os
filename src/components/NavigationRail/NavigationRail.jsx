import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/text-button.js";
import { MdRipple } from "@material/web/ripple/ripple.js";
import React, { useEffect, useRef } from "react";
import "./NavigationRail.css";

const navItems = [
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
    <nav className="flex flex-col bg-[#F7F2FA] h-screen sticky left-0 top-0 z-50 p-4 w-[100px] float-left">
      <div>
        <md-filled-tonal-button
          style={{
            backgroundColor: "#6e5586", // Your purple color or M3 token
            borderRadius: "12px",
            padding: 10,
            width: 60,
            height: 60,
            display: "flex",
            flex: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <span className="material-symbols-outlined">home</span>
        </md-filled-tonal-button>
        {/* // todo : button anitmation */}
        <div className="flex flex-col align-middle gap-5 mt-8">
          {navItems.map((item, index) => {
            const isSelected = selectedLabel === item.label;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1"
              >
                <button
                  ref={(el) => (rippleRefs.current[index] = el)}
                  key={item.label}
                  onClick={() =>
                    setSelectedLabel(isSelected ? null : item.label)
                  }
                  className={` rounded-[16px] cursor-pointer group hover:bg-purple-100 w-[56px] h-[32px] flex items-center justify-center ${
                    isSelected && "bg-purple-200"
                  }`}
                >
                  <span
                    style={{
                      fontVariationSettings: `'FILL' ${
                        isSelected ? 1 : 0
                      }, 'wght' ${isSelected ? 700 : 700}, 'GRAD' 0, 'opsz' 48`,
                    }}
                    className={
                      isSelected
                        ? "material-symbols"
                        : "material-symbols-outlined"
                    }
                  >
                    {item.icon}
                  </span>
                </button>

                <span className="text-sm">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
export default NavigationRail;
