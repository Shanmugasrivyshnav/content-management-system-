import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,
  body,
  #root{
    width:100%;
    min-height:100%;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    background:#f5f5f5;
    color:#333;
    line-height:1.5;
  }

  a{
    color:inherit;
    text-decoration:none;
  }

  button{
    font-family:inherit;
    transition:.2s;
    &:hover{
      opacity:.9;
    }
  }
  input,
  textarea,
  select{
    font-family:inherit;
  }
  outline:none;
    
`;
export default GlobalStyles;
