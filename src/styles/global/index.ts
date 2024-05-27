import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100vw;
    max-height: 100vh;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    transition: .15s
  }
`;

export default GlobalStyle;
