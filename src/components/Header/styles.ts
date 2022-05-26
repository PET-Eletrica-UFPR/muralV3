import styled from "styled-components"

export const Container = styled.header`
    background: var(--preto);
    border-bottom-color: red;
    border-bottom-style: solid;
    border-color: gray;
    border-width: 1px;

`;

export const Content = styled.div`
    
    margin: 0;
    max-width: 1120px;
   

    display: flex;
    align-items: center;
    
    

    ul {
        display: flex;
        color: white;
        margin-left: 14rem;
        

        li {
            
            align-items: center;
            display: flex;
            width: auto;
            & + li {
                margin-left: 8rem;
            }
            
            font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1.5rem;
            white-space: nowrap;

            span {
                
                margin-left: 1rem;

                strong {
                    display: block;
                    font-size: 2rem;
                }
            }
        }

        
    }
    
`