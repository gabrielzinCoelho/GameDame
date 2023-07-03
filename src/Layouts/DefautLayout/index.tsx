import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer, HeaderContainer, InputContainer, NavContainer } from "./styles";

import menuLogo from '../../assets/menuLogo.svg'
import { MagnifyingGlass } from "phosphor-react";

export function DefaultLayout(){
    return (
        <DefaultLayoutContainer>
            <HeaderContainer>
                <img src={menuLogo} />
                <NavContainer>
                    <h1>Lançamentos</h1>
                    <h1>|</h1>
                    <h1>Populares</h1>
                    <h1>|</h1>
                    <h1>Gêneros</h1>
                    <h1>|</h1>
                    <h1>Promoções</h1>
                    <h1>|</h1>
                    <h1>Conta</h1>
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