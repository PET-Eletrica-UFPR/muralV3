import styled from "styled-components";

export const Container = styled.div`
    background: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 1px;
    border-color: black;
    border-style: solid;
    
`

export const Content = styled.div `
    display: flex;  
    align-items: center;

    div {
        margin-left: auto;
        padding:1rem;
        background-color: black;
        color: white;
        font-size: 1.15rem;
        font-weight: bold;
    }
`