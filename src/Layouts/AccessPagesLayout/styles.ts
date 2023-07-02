import { styled } from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 90rem;
    max-height: 64rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;

    display: flex;
    justify-content: space-between;
`;

export const BackgroundImageContainer = styled.div`
    overflow: hidden;
    height: 100%;
    width: 60%;
    object-fit: cover;
`;