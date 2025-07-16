import React, { useContext, useEffect, useRef } from "react";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/text-button.js";
import { MdRipple } from "@material/web/ripple/ripple.js";
import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link as ScrollLink, scroller } from "react-scroll";
import "./NavigationRail.css";

const navItems = [
  { label: "Home", icon: "home", href: "home" },
  { label: "Projects", icon: "interests", href: "gallery" },
  { label: "Skills", icon: "code", href: "skills" },
  { label: "About me", icon: "account_circle", href: "about" },
];

function NavigationRail() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const rippleRefs = useRef([]);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    rippleRefs.current.forEach((ref) => {
      if (ref) new MdRipple(ref);
    });

    const savedLabel = localStorage.getItem("selectedLabel");
    if (savedLabel) {
      const target = navItems.find((item) => item.label === savedLabel);
      if (target) {
        setTimeout(() => {
          scroller.scrollTo(target.href, {
            duration: 0,
            smooth: false,
            offset: -80,
          });
          hasScrolledRef.current = true;
        }, 100);
      }
    }
  }, []);

  return (
    <nav
      className="h-auto border-x-[0.1px] border-x-gray-500"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="sticky top-4 left-0 flex flex-col items-center justify-between min-h-[100dvh]">
        <div className="flex flex-col gap-5">
          {navItems.map((item, index) => (
            <ScrollLink
              key={item.label}
              to={item.href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onSetActive={() =>
                localStorage.setItem("selectedLabel", item.label)
              }
            >
              <div className="flex flex-col items-center gap-1 w-[100px]">
                <button
                  ref={(el) => (rippleRefs.current[index] = el)}
                  className="rounded-[16px] cursor-pointer group hover:bg-[var(--nav-button-bg-hover)] w-[56px] h-[32px] flex items-center justify-center transition-all duration-300"
                >
                  <span className="material-symbols-outlined transition-all duration-300">
                    {item.icon}
                  </span>
                </button>
                <span className="text-sm">{item.label}</span>
              </div>
            </ScrollLink>
          ))}
        </div>
        <div className="mb-6 group">
          <button
            onClick={toggleTheme}
            className="h-[50px] w-[50px] border-[0.5px] cursor-pointer justify-items-center hover:bg-[var(--theme-toggle-button)] rounded-full"
          >
            {isDarkMode ? (
              <MdOutlineDarkMode size={25} />
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
