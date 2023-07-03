import { NavLink, useNavigate } from "react-router-dom";
import { ButtonSubmit, FooterContainer, ForgetPasswordContainer, InputEmail } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useState } from "react";

export function ForgetPassword(){

    const navigate = useNavigate();

    const [inputEmailValue, setInputEmailValue ] = useState("");

    function handleInvalidInput(event: React.FormEvent<HTMLInputElement>){
        (event.target as HTMLInputElement).setCustomValidity("Informe um email válido");
    }

    function handleInputEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputEmailValue(event.target.value);
    }

    function handleForgetPasswordSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        navigate("/");
    }

    return (
        <ForgetPasswordContainer>
            <h1>Recuperar conta</h1>
            <form onSubmit={handleForgetPasswordSubmit}>
                <InputEmail
                    placeholder="E-mail"
                    required
                    type="email"
                    onInvalid={handleInvalidInput}
                    value={inputEmailValue}
                    onChange={handleInputEmailChange}
                />
                <ButtonSubmit 
                    type="submit"
                    disabled={!(inputEmailValue.length)}
                >
                    <ArrowRight size={40} />
                </ButtonSubmit>
            </form>
            <FooterContainer>
                <NavLink to="/registrar">Criar Conta</NavLink>
                <NavLink to="/">Fazer Login</NavLink>
            </FooterContainer>
        </ForgetPasswordContainer>
    );
}