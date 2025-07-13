import "./App.css";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Gallery from "./components/Gallery/Gallery";
import NavigationRail from "./components/NavigationRail/NavigationRail";
import Skills from "./components/Skills/Skills";
import TopHeader from "./components/TopHeader/TopHeader";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import React, { useContext } from "react";

// ✅ Extracted inner app that uses context safely
function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
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

// ✅ Main App wraps everything in ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
