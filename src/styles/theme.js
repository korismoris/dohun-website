import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        
        font-family: 'Noto Sans Display', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default {
    space: [],
    red: "#e76f51",
    orange: "#f4a261",
    yellow: "#e9c46a",
    green: "#2a9d8f",
    darkgreen: "#264653",
    blue: "#296094",
    purple: "#3F1F56",
    cream: "#EDE9D5",
    milkWhite: "#F9F9FB",
    trueWhite: "#FFFFFF",
    black: "#1a1a1a",
    lightgrey: "#E5E5E5",
    grey: "#353535",

    primary: "#2a9d8f",
    secondary: "#e76f51",
    primaryNavbar: "#264653",
    primaryText: "#120F06",
    primaryTextDark: "#FFFFFF",
    primaryTextDarkHover: "#E9E5E1",
    secondaryText: "#CF2B52",
    secondaryTextDark: "#D4D648",
    neutral: "#f4f4f4",
};
