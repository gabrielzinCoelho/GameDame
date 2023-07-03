import { styled } from "styled-components";

export const UserAccountContainer = styled.div`
    width: 100%;
    display: flex;
    height: calc(100vh - 6rem);
    align-items: center;
    
`;

export const UserDataContainer = styled.div`
    width: 60%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1{
        font-weight: 500;
        font-size: 3rem;
        display: flex;
    }
`;

export const UserDescriptionContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;

    span{
        font-weight: 400;
        font-size: 2rem;
        width: 100%;
        display: flex;
    }
`;

export const BaseInput = styled.input`

    flex: 1;

    margin: 0 1rem;
    background: transparent;
    border: 0;
    border-bottom: 0.2rem solid ${props => props.theme["blue-gray-700"]};
    padding: 0.5rem 0.5rem;
    color: ${props => props.theme["blue-gray-700"]};

    &:focus{
        box-shadow: none;
    }

    &::placeholder{
        color: ${props => props.theme["blue-gray-200"]};
        text-align: center;
    }
`;

export const InputUserData = styled(BaseInput)`

    height: 2rem;
    font-weight: 400;
    font-size: 2rem;
`;

export const InputUserName = styled(BaseInput)`

    height: 3rem;
    font-weight: 500;
    font-size: 3rem;

    &::placeholder{
        font-weight: 400;
        font-size: 2rem;
    }

`;

export const ButtonContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20rem;
        padding: 0.5rem;

        background: ${props => props.theme["blue-gray-700"]};
        border: 0;
        border-radius: 8px;
        
        font-weight: 400;
        font-size: 1.875;
        color: ${props => props.theme["gray-100"]};

        transition: 0.5s;

        cursor: pointer;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }

        &:hover:not(:disabled){
            background: ${props => props.theme["blue-gray-200"]};
            color: ${props => props.theme["blue-gray-700"]};
            box-shadow: 0 1px 5px 1px ${props => props.theme["blue-gray-700"]};
        }
        
    }

`;

export const UserGamesContainer = styled.div`
    flex: 1;
    height: 100%;
    background: ${props => props.theme["blue-gray-700"]};
    padding: 6rem 3rem 3rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1{
        color: ${props => props.theme["gray-100"]};
        font-size: 2rem;
        font-weight: 400;
    }

    footer{
        text-align: right;
        color: ${props => props.theme["gray-100"]};

        svg{
            cursor: pointer;
        }
    }
`;

export const GameListContainer = styled.div`

    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;

    justify-content: space-between;
    
`;

export const GameContainer = styled.div`
    

    display: flex;
    flex-direction: column;
    height: 17.125rem;
   
    cursor: pointer;

    &:hover{
        img {
            transform: scale(1.2);
        }
    }

    footer{

        text-align: center;

        span{
            font-size: 1.125rem;
            font-weight: 400;
            color: ${props => props.theme["gray-100"]};
        }

    }

`;

export const ThumbGameContainer = styled.div`

    width: 12rem;
    height: 16rem;
    object-fit: cover;
    overflow: hidden;

    img{
        width: 12rem;
        height: 16rem;
        transition: 0.5s;
    }
`;
