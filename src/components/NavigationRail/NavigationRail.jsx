import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/harness.js";
import React from "react";

const navItems = [
  { label: "Projects", icon: "interests" },
  { label: "Skills", icon: "code" },
  { label: "About me", icon: "account_circle" },
  // {label:"", icon:"", , }, // template line
];
function NavigationRail() {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <nav className="flex flex-col fixed top-0 left-0 bg-[#F7F2FA] h-full p-4 ">
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
      <div className="flex flex-col align-middle gap-5 mt-8">
        {navItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <div
              onClick={() =>
                isSelected === true ? setIsSelected(true) : setIsSelected(false)
              }
              className={` rounded-[16px] cursor-pointer group hover:bg-purple-200 w-[56px] h-[32px] flex items-center justify-center ${
                isSelected && "bg-purple-300"
              }`}
            >
              <span className="material-symbols-outlined text-[24px] group-hover:font-extrabold">
                {item.icon}
              </span>
            </div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
export default NavigationRail;
