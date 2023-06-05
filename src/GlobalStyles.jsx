import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body,
    #root {
      height: 100%;
      width: 100%;
    }

    body {
      font-family: system-ui;
      margin: 0;
      padding: 0;
      & > & {
        font-family: system-ui;
      }
    }

    *,
    *:after,
    *:before {
      box-sizing: border-box;
    }
`;

export default GlobalStyles;
