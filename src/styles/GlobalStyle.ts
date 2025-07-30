import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Pretendard', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
      background-color: #ffffffff;
    }

  button {
    border: none;
  }

    a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border: none;
    padding: 0;
    margin: 0;
  }

  input:focus {
    outline: none;
  }


`;

export default GlobalStyle;
