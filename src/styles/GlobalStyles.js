import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    width: 100%;
    min-height: 100vh;
    /* padding-inline: 16vb; */
    display: flex;
    flex-direction: column;
    align-items: center;
}


`;
