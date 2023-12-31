import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @media(max-width: 768px){
        html{
            font-size: 87.5%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button:focus{
        box-shadow: none;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["blue-gray-700"]}
    }

    body{
        background: ${props => props.theme["gray-100"]};
        color: ${props => props.theme["blue-gray-700"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'MontSerrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

`;