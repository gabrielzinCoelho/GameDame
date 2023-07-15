import { NavLink, useNavigate } from "react-router-dom";
import { ButtonSubmit, FooterContainer, InputRegister, RegisterContainer } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

export function Register(){

    const navigate = useNavigate();

    const [inputNameValue, setInputNameValue ] = useState("");
    const [inputEmailValue, setInputEmailValue ] = useState("");

    const [inputCpfValue, setInputCpfValue ] = useState("");

    const [inputPasswordValue, setInputPasswordValue ] = useState("");
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue ] = useState("");

    function handleInvalidInput(messageError:string, event: React.FormEvent<HTMLInputElement>){
        (event.target as HTMLInputElement).setCustomValidity(messageError);
    }

    function handleRegisterSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(inputPasswordValue != inputConfirmPasswordValue){
            setInputConfirmPasswordValue("");
            return;
        }
        navigate("/");
    }

    function handleInputEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputEmailValue(event.target.value);
    }

    function handleInputNameChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputNameValue(event.target.value);
    }

    function handleInputCpfChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputCpfValue(event.target.value);
    }

    function handleInputPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputPasswordValue(event.target.value);
    }

    function handleInputConfirmPasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("");
        setInputConfirmPasswordValue(event.target.value);
    }


    return (
        <RegisterContainer>
            <h1>Registrar</h1>
            <form onSubmit={handleRegisterSubmit}>
                <InputRegister>
                    <input 
                        placeholder="Nome de usuário"
                        required
                        onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Informe um nome válido", event) }
                        value={inputNameValue}
                        onChange={handleInputNameChange}
                    />
                </InputRegister>
                <InputRegister>
                    <input
                        placeholder="E-mail"
                        required
                        type="email"
                        onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Informe um email válido", event) }
                        value={inputEmailValue}
                        onChange={handleInputEmailChange}
                    />
                </InputRegister>
                <InputRegister>
                    <CpfCnpj
                        placeholder="CPF"
                        required
                        onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Informe um CPF válido", event) }
                        maxlength={14}
                        value={inputCpfValue}
                        onChange={handleInputCpfChange}
                    />
                </InputRegister>
                <InputRegister>
                    <input 
                         placeholder="Senha"
                         required
                         type="password"
                         onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Informe uma senha válida", event) }
                         value={inputPasswordValue}
                         onChange={handleInputPasswordChange}
                    />
                </InputRegister>
                <InputRegister>
                    <input 
                        placeholder="Confirmar Senha"
                        required
                        type="password"
                        onInvalid={ (event: React.FormEvent<HTMLInputElement>)=>handleInvalidInput("Confirme a senha corretamente", event) }
                        value={inputConfirmPasswordValue}
                        onChange={handleInputConfirmPasswordChange}
                    />
                </InputRegister>
                <ButtonSubmit 
                    type="submit"
                    disabled={
                        !(inputNameValue.length) ||
                        !(inputEmailValue.length) ||
                        !(inputCpfValue.length) ||
                        !(inputPasswordValue.length) ||
                        !(inputConfirmPasswordValue.length)
                    }
                >
                    <ArrowRight size={40} />
                </ButtonSubmit>
            </form>
            <FooterContainer>
                <NavLink to="/">Fazer Login</NavLink>
            </FooterContainer>
        </RegisterContainer>
    );
} 