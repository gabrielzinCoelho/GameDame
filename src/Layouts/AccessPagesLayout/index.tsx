import { Outlet } from "react-router-dom";
import { BackgroundImageContainer, LayoutContainer } from "./styles";

import backgroundImage from "../../assets/backgroundAccessPages.svg";

export function AccessPagesLayout(){
    return (
        <LayoutContainer>
            <Outlet />
            <BackgroundImageContainer>
                <img src={backgroundImage} />
            </BackgroundImageContainer>
        </LayoutContainer>
    );
}