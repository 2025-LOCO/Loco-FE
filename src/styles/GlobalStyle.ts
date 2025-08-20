import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");

  * {
    font-family: 'Pretendard','Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
  }

  :root{
    --color-mint100: ${({ theme }) => theme.colors.mint100};
    --color-mint200: ${({ theme }) => theme.colors.mint200};
    --color-mint300: ${({ theme }) => theme.colors.mint300};
    --color-navy: ${({ theme }) => theme.colors.navy};
    --color-darknavy: ${({ theme }) => theme.colors.darknavy};
    --color-gray: ${({ theme }) => theme.colors.gray};
    --color-sub50: ${({ theme }) => theme.colors.sub50};
    --color-sub100: ${({ theme }) => theme.colors.sub100};
    --color-sub200: ${({ theme }) => theme.colors.sub200};
    --color-sub300: ${({ theme }) => theme.colors.sub300};
    --color-sub400: ${({ theme }) => theme.colors.sub400};
    --color-sub500: ${({ theme }) => theme.colors.sub500};
    --color-sub600: ${({ theme }) => theme.colors.sub600};
    --color-sub700: ${({ theme }) => theme.colors.sub700};
    --color-sub800: ${({ theme }) => theme.colors.sub800};
    --color-sub900: ${({ theme }) => theme.colors.sub900};
    --color-main50: ${({ theme }) => theme.colors.main50};
    --color-main100: ${({ theme }) => theme.colors.main100};
    --color-main150: ${({ theme }) => theme.colors.main150};
    --color-main200: ${({ theme }) => theme.colors.main200};
    --color-main250: ${({ theme }) => theme.colors.main250};
    --color-main300: ${({ theme }) => theme.colors.main300};
    --color-main350: ${({ theme }) => theme.colors.main350};
    --color-main400: ${({ theme }) => theme.colors.main400};
    --color-main450: ${({ theme }) => theme.colors.main450};
    --color-main500: ${({ theme }) => theme.colors.main500};
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
