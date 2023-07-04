import { NavLink, Outlet } from "react-router-dom";
import { DefaultLayoutContainer, HeaderContainer, InputContainer, NavContainer } from "./styles";

import menuLogo from '../../assets/menuLogo.svg'
import { MagnifyingGlass } from "phosphor-react";

export function DefaultLayout(){
    return (
        <DefaultLayoutContainer>
            <HeaderContainer>
                <img src={menuLogo} />
                <NavContainer>
                    <NavLink to="/GameDame/Lançamentos">
                        <h1>Lançamentos</h1>
                    </NavLink>
                    <h1>|</h1>
                    <NavLink to="/GameDame/Populares">
                        <h1>Populares</h1>
                    </NavLink>
                    <h1>|</h1>
                    <NavLink to="/GameDame/Gêneros">
                        <h1>Gêneros</h1>
                    </NavLink>
                    <h1>|</h1>
                    <NavLink to="/GameDame/Promoções">
                        <h1>Promoções</h1>
                    </NavLink>
                    <h1>|</h1>
                    <NavLink to="/GameDame/minha-conta">
                        <h1>Conta</h1>
                    </NavLink>
                </NavContainer>
                <InputContainer>
                    <input id="search" />
                    <label htmlFor="search"><MagnifyingGlass size={25}/></label>
                </InputContainer>
            </HeaderContainer>
            <Outlet />
        </DefaultLayoutContainer>
    );
}