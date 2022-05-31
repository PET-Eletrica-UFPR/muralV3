import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f8f2f5;
        --preto: #000000;
        --amarelo: EBD64C;
        --azul: 0045AD;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        
    }
`

export const Container = styled.div `
    display: flex;
    height: 100%;
`