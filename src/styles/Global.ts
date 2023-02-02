import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    --white: #FFFFFF;
    --white-cream: #FAFAFA; // body background-color
    --dark-orange: #D87D4A;
    --light-orange: #FBAF85;
    --header-black: #000000;
    --footer-black: #101010;
    --light-grey: #F1F1F1;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Manrope', sans-serif;
    background-color: var(--white-cream);
    color: rgba(0,0,0, 0.5);
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6, sub {
    text-transform: uppercase;
    font-weight: 700;
  }

  h1 {
    font-size: 5.6rem;
    line-height: 5.8rem;
    letter-spacing: 0.2rem;
    color: var(--white);
  }

  h2 {
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 0.15rem;

  }

  h3 {
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: 0.115rem;
  }

  h4 {
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 0.2rem;
  }

  h5 {
    font-size: 2.4rem;
    line-height: 3.3rem;
    letter-spacing: 0.17rem;
  }

  h6 {
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: 0.13rem;
  }

  sup {
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
  }

  sub {
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
  }

  li > a {
    color: var(--white);

    &:hover {
      color: var(--dark-orange);
    }
  }

  a {
    font-family: inherit;

    &:hover {
      color: var(--dark-orange);
    }
  }
`;

export default GlobalStyles;
