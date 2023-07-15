import { ArrowRight } from "phosphor-react";
import { ButtonSubmit, FooterContainer, InputLogin, LoginContainer } from "./styles";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function Login(){

    const navigate = useNavigate();

    const [inputEmailValue, setInputEmailValue ] = useState("");

    const [inputPasswordValue, setInputPasswordValue ] = useState("");

    function handleInvalidInput(messageError:string, event: React.FormEvent<HTMLInputElement>){
        (event.target as HTMLInputElement).setCustomValidity(messageError);
    }

    function handleInputEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputEmailValue(event.target.value);
    }

    function handleInputPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputPasswordValue(event.target.value);
    }

    function handleLoginUser(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        navigate("/GameDame/Lançamentos");
    }

    return (
        <LoginContainer>
            <h1>Login</h1>
            <form onSubmit={handleLoginUser}>
                <InputLogin
                    placeholder="E-mail"
                    required
                    type="email"
                    onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Informe um email válido", event) }
                    value={inputEmailValue}
                    onChange={handleInputEmailChange}
                />
                <InputLogin 
                    placeholder="Senha"
                    required
                    type="password"
                    onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Informe uma senha válida", event) }
                    value={inputPasswordValue}
                    onChange={handleInputPasswordChange}
                />
                <ButtonSubmit 
                    type="submit"
                    disabled={!(inputEmailValue.length) || !(inputPasswordValue.length)}
                >
                    <ArrowRight size={40} />
                </ButtonSubmit>
            </form>
            <FooterContainer>
                <NavLink to="/registrar">Criar Conta</NavLink>
                <NavLink to="/recuperar-senha">Esqueceu a Senha?</NavLink>
            </FooterContainer>
        </LoginContainer>
    );    
}