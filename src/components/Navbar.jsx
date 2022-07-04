import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import "../styles/Navbar.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setToggle(!toggle);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="navbar">
        <div className="nav--container">
          <div></div>
          <div className="logo">STUDIO GHILBI FILMS</div>

          <div className="toggle" onClick={() => themeToggler()}>
            {toggle ? (
              <FaToggleOn className="toggle--icons" />
            ) : (
              <FaToggleOff className="toggle--icons" />
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
