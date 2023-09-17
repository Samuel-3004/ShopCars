import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #FD4D56;
    --primary-color-hover: #42b72a;
    --secondary-color: #1877f2 ;
    --white: #FFFFFF;
    --black: #121212;
    --gray: #282828;
    --grey: #868e96;
    --green: #6FD660;
    --yellow: #FEEA00;
    --light-gray: #D3D3D3;
    --alert-negative: #F24D35;
    --alert-success: #33E897;
  }

  /* body {
    background-color: var(--black);
    font-family: 'Open sans', sans-serif;
  } */

  button {
    border-radius: 6px;
  }

  option {
    max-height: 100px;
  }

  *{
    scrollbar-width: thin;
    scrollbar-color: var(--primary-color) ;
  }
  *::-webkit-scrollbar {

  }
  *::-webkit-scrollbar-track {
    background: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);    
  }
`;

export default GlobalStyle;
