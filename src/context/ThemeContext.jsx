import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // ✅ Load from localStorage before first render
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    // ✅ Or check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // ✅ Update localStorage and <html> class immediately
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
