import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
    font-family: 'Roboto';
    font-size: 1.2rem;
  }

  button {
    margin: 2px;
    padding: 3px;
    height: 2rem;
  }

  input {
    // background-color: red;
    padding: 3px;
    height: 2rem;
  }
`;
