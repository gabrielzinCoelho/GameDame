import { styled } from "styled-components";

export const DefaultLayoutContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`

    width: 100%;
    box-shadow: 0 4px 5px 2px ${props => props.theme["blue-gray-200"]};
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    object-fit: cover;

    img{
        height: 5rem;
        width: 5rem;
    }

`;

export const NavContainer = styled.div`

    display: flex;
    justify-content: center;
    gap: 1rem;

    h1{
        font-size: 2rem;
        font-weight: 300;
        color: ${props => props.theme["blue-gray-700"]};
    }
`;

export const InputContainer = styled.div`

    width: 12rem;
    height: 2.5rem;
    background: ${props => props.theme["blue-gray-200"]};
    opacity: 0.7;
    border-radius: 8px;
    display: flex;
    align-items: center;
    overflow: hidden;

    label{
        width: 20%;
        color: ${props => props.theme["black"]};
    }

    input{

        opacity: 1;
        min-width: 0;
        height: 100%;
        flex: 1;
        background: transparent;
        border: 0;
        box-shadow: none;
        padding: 0.5rem;

        font-size: 1rem;
        font-weight: 300;
        color: ${props => props.theme["black"]};

    }

`;