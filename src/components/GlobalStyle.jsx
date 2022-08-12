import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
 
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Cursive,Times New Roman,"Courier New",
      sans-serif;
    background-color: #fff;
    color: #010101;
  }
  img,
  svg {
    display: block;
    max-width: 100%;
    heigh: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
  text-decoration: none;
  color: inherit;
}
`;
