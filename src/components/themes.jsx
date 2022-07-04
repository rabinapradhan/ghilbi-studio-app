import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  color: "#000",
};

export const darkTheme = {
  body: "#28282B",
  color: "#fff",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color :${(props) => props.theme.body};
}`;
