import React, { useContext, useEffect, useRef } from "react";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/text-button.js";
import { MdRipple } from "@material/web/ripple/ripple.js";
import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "./NavigationRail.css";

const navItems = [
  { label: "Home", icon: "home" },
  { label: "Projects", icon: "interests" },
  { label: "Skills", icon: "code" },
  { label: "About me", icon: "account_circle" },
  // {label:"", icon:"", , }, // template line
];
function NavigationRail() {
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const rippleRefs = useRef([]);

  useEffect(() => {
    rippleRefs.current.forEach((ref) => {
      if (ref) new MdRipple(ref);
    });
  }, []);

  return (
    <nav
      className="  h-auto border-x-[0.1px] border-x-gray-500"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      {/* // todo : button anitmation */}
      <div className="sticky top-4 left-0 flex flex-col items-center justify-between h-screen">
        <div className="flex flex-col gap-5 ">
          {navItems.map((item, index) => {
            const isSelected = selectedLabel === item.label;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 w-[100px]"
              >
                <button
                  ref={(el) => (rippleRefs.current[index] = el)}
                  key={item.label}
                  onClick={() =>
                    setSelectedLabel(isSelected ? null : item.label)
                  }
                  className={` rounded-[16px] cursor-pointer group hover:bg-[var(--nav-button-bg-hover)] w-[56px] h-[32px] flex items-center justify-center ${
                    isSelected && " bg-[var(--nav-button-bg-hover) "
                  }`}
                  style={{
                    backgroundColor: "var(--nav-button-)",
                  }}
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
        <div className="mb-6 group">
          <button
            onClick={toggleTheme}
            className="h-[50px] w-[50px] border-[0.5px] cursor-pointer justify-items-center hover:bg-[var(--theme-toggle-button)] rounded-full"
          >
            {isDarkMode ? (
              <MdOutlineDarkMode size={25} className="" />
            ) : (
              <MdOutlineLightMode size={25} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavigationRail;
