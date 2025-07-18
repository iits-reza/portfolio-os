import "./App.css";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Gallery from "./components/Gallery/Gallery";
import NavigationRail from "./components/NavigationRail/NavigationRail";
import Skills from "./components/Skills/Skills";
import TopHeader from "./components/TopHeader/TopHeader";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import React, { useContext } from "react";

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={isDarkMode ? "dark" : ""}
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="relative flex flex-row">
        <NavigationRail />
        <div className="flex flex-col flex-1">
          <TopHeader />
          <Gallery />
          <Skills />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
