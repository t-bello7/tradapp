import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    ul {
        list-style-type: none;
    }

    a { 
        text-decoration: none;
    }

    p{
        margin: 10px 0;
    }

    img {
        width: 100%;
    }
    body{
        background-color: #0F1217;
        color: #fff;
    }
`

export default GlobalStyles;