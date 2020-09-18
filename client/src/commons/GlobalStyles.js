import { createGlobalStyle } from "styled-components";
import theme from "./Themes";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    a{
        color:inherit;
        text-decoration:none;
        cursor: pointer;
    }
    body{
        background-color:#ffffff;
        font-family: -apple-system, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
    input, button {
        background-color: transparent;
        border: none;
    }
    button {
        outline: none;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: sans-serif;
    }
    h3 {
        ${theme.fontStyle.subTitle1};
    }
    h4 {
        ${theme.fontStyle.subTitle2};
    }
    h5 {
        ${theme.fontStyle.subTitle3};
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;
