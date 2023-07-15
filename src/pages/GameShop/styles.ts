import { styled } from "styled-components";

export const GameShopContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CarouselContainer = styled.div`
    width: 75rem;
    height: 28rem;
    margin: 5rem auto;
`;

export const CarouselGameItemContainer = styled.div<{minorItem: boolean}>`
    
    flex: 1;
    overflow: hidden;
    object-fit: cover;
    position: relative;
    cursor: pointer;

    border: 2px solid ${props => props.theme["blue-gray-200"]};
    border-collapse: collapse;

    &:hover{
        img{
            scale: 1.1;
        }
    }

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: 0.5s;
    }

    footer{
        position: absolute;
        bottom: 1rem;
        right: ${props => props.minorItem ? "none" : "2rem"};
        left: ${props => props.minorItem ? "2rem" : "none"};
        display: flex;
        gap: 1rem;
        
        span{
            border-radius: 8px;
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
            font-weight: 600;

            background: ${props => props.theme["gray-100"]};
            color: ${props => props.theme["blue-gray-700"]};

            &:first-of-type{
                background: ${props => props.theme["blue-gray-700"]};
                color: ${props => props.theme["gray-100"]};
            }        

        }


    }

`;

export const CarouselGameSlideContainer = styled.div`

    width: 75rem;
    height: 28rem;
    display: flex;
    
`;

export const FirstSectionSlideContainer = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;

`;

export const SecondSectionSlideContainer = styled.div`
    flex: 2;
    display: flex;
`;

export const GameCatalogContainer = styled.div`

    padding: 1rem 5rem;
    background: ${props => props.theme["blue-gray-700"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        color: ${props => props.theme["gray-100"]};
        font-size: 2rem;
        font-weight: 300;
    }

`;

export const GameListContainer = styled.div`
    display: flex;
    gap: 4rem;
    flex-wrap : wrap;
    justify-content: space-between;
`;

export const GameContainer = styled.div`
    

    height: 16rem;
    overflow: hidden;
    object-fit: cover;
    position: relative;
   
    cursor: pointer;

    &:hover{
        img {
            transform: scale(1.2);
        }
    }

    footer{
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        z-index: 2;
        
        span{
            background: ${props => props.theme["gray-100"]};
            color: ${props => props.theme["blue-gray-700"]};
            border-radius: 8px;
            padding: 0.5rem 0.5rem;
            font-size: 0.75rem;
            font-weight: 600;
        }
    }

`;

export const ThumbGameContainer = styled.div`

    width: 12rem;
    height: 16rem;
    object-fit: cover;
    overflow: hidden;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }

`;