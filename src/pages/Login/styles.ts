import { styled } from "styled-components";

export const LoginContainer = styled.div`

    flex: 1;
    padding: 3rem 5rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;

    h1{
        font-size: 4rem;
        color: ${props => props.theme["blue-gray-700"]};
        text-align: center;
    }

    form{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        gap: 3rem;
    }
`;

export const InputLogin = styled.input`
    background: ${props => props.theme["gray-300"]};
    border: 0;
    border-radius: 4px;
    box-shadow: 0 4px 20px 0 ${props => props.theme["blue-gray-200"]};
    
    width: 100%;
    height: 3rem;

    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 300;
    color: ${props => props.theme["blue-gray-700"]};

    &::placeholder{
        color: ${props => props.theme["blue-gray-200"]};
    }

`;

export const ButtonSubmit = styled.button`
    border: 0;
    background: transparent;
    color: ${props => props.theme["blue-gray-200"]};
    cursor: pointer;
    transition: 0.5s;

    &:disabled{
        cursor: not-allowed;
        opacity: 0.7;
    }

    &:not(:disabled):hover{
        color: ${props => props.theme["blue-gray-700"]};
    }

`;

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    a{
        cursor: pointer;
        font-size: 1.25rem;
        font-weight: 600;
        color: ${props => props.theme["blue-gray-200"]};
        transition: 0.5s;

        &:hover{
            color: ${props => props.theme["blue-gray-700"]};
        }
    }
`;