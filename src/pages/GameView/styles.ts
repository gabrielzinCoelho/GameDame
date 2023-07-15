import {styled} from 'styled-components'


export const GameViewContainer = styled.div`

    width: 80%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

export const GameSectionContainer = styled.div`

    flex: 1;
    display: flex;
    flex-direction: row;
`;

export const CarouselContainer = styled.div`

    width: 60%;
    height: 30rem;
    overflow: hidden;
    object-fit: cover;

    img{
        width: 100%;
        height: 100%;
    }


`;

export const GameDataContainer = styled.div`

    flex: 1;
    background: ${props => props.theme["blue-gray-700"]};
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem 2rem;

`;

export const GameDescriptionContainer = styled.div`

    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-overflow: ellipsis;
    overflow: hidden;

    h1{
        text-align: center;
        color: ${props => props.theme["gray-100"]};
        font-size: 2rem;
        font-weight: 600;
    }

    span{
        color: ${props => props.theme["gray-100"]};
        font-size: 1rem;
        font-weight: 300;
    }
    
`;

export const  GameTechnicalSheetContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

`;

export const TechnicalSheetInfo = styled.div`

    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    span:first-of-type{
        color: #1B2838;
        font-size: 0.75rem;
        font-weight: 500;
    }

    span:last-of-type{
        color: #66C0F4;
        font-size: 0.75rem;
        font-weight: 500;

    }

`;

export const SaleGameContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: space-between;

`;

export const PriceGameContainer = styled.div`

    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    span {
        background: ${props => props.theme["gray-100"]};
        color: #1B2838;
        border-radius: 8px;
        padding: 0.5rem 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        margin: auto 0;
    }

`;

export const ShopCarButton = styled.button`

    background: ${props => props.theme["gray-100"]};
    color: #1B2838;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    border: 0;
    
    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const CommentsContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background: ${props => props.theme["blue-gray-200"]};
    padding: 2rem 4rem;

`;

export const NewCommentBox = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        color: #1B2838;
        font-size: 1.25rem;
        font-weight: 600;
    }

    form{

        width: 100%;

        textarea{
            width: 100%;
            background: ${props => props.theme["blue-gray-700"]};
            border: 0;
            resize: none;
            height: 6rem;
            padding: 1rem;
            border-radius: 8px;
            color: ${props => props.theme["gray-300"]};
            line-height: 1.4;
            margin-top: 1rem;

            &::placeholder{
                color: ${props => props.theme["gray-300"]};
                opacity: 0.6;
            }

        }

        footer {
            visibility: hidden;
            max-height: 0;

            button{
                margin-top: 1rem;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                border: 0;
                background: ${props => props.theme["gray-100"]};
                color: ${props => props.theme["blue-gray-700"]};
                font-weight: bold;
                cursor: pointer;

                transition: background-color 0.5s;

                &:disabled{
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                &:not(:disabled):hover{
                    background: ${props => props.theme["blue-gray-700"]};
                    color: ${props => props.theme["gray-100"]};
                }

            }
        }

        &:focus-within footer{
            visibility: visible;
            max-height: none;
        }

    }

`;

export const CommentList = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

`;

export const CommentContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const AvatarContainer = styled.div`

    img{
        width: 3rem;
        height: 3rem;
    }

`;

export const CommentBox = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;

    background: ${props => props.theme["blue-gray-700"]};
    border-radius: 8px;
    padding: 1rem;


    header{

        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        span{
            color: ${props => props.theme["gray-300"]};
        }
        
        button{
            background: transparent;
            color: ${props => props.theme["gray-300"]};
            border: 0;
            cursor: pointer;
            line-height: 0;
            transition: 0.1s;

            &:hover{
                color: #9e2b2b;
            }
        }

    }

    p{
        color: ${props => props.theme["gray-300"]};
        margin-top: 1rem;
    }

`;