import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    background:#f8f9fa;
    color:#222;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  img{
    max-width:100%;
    display:block;
  }
`;

export default GlobalStyles;
