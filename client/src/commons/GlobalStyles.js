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
        font-family: 'Open Sans', 'Noto Sans KR', sans-serif, -apple-system ;
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
        font-family: 'Open Sans', 'Noto Sans KR';
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
    .tui-editor-contents {
        font-size: 16px;
    }
`;

export default GlobalStyles;
