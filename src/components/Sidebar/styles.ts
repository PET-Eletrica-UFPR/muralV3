// styles.js
import styled from "styled-components";

export const Container = styled.div`
    display: block;
    width: min-content;
    height: calc(100vh - 15rem);
    background-color: black;
    padding: 1rem;
    border-right-color: red;
    border-right-style: solid;
    border-color: gray;
    border-width: 1px;
`;

export const Content = styled.div`
    margin-top: 1rem;
    margin-left: 5px;
    color: white;

    span {
        font-weight: bold;
        font-size: 1.5rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.1rem;

        tbody {
            strong {
                color: yellow;
                margin-top: 1rem;
            }
        }
    }
    
    /* Ocultar SVGs e imagens indesejadas que possam passar pela sanitização */
    svg, img {
        display: none;
    }
`;