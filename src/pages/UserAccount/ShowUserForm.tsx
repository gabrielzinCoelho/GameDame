import { User } from "./index";
import { InputUserDataContainer, InputUserNameContainer, UserDescriptionContainer } from "./styles";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

export function ShowUserForm({userData, handleUpdateUser} : {userData : User, handleUpdateUser : (updatedValue : User) => void}){
    return (
        <>
            <h1>Olá,
                <InputUserNameContainer>
                    <input
                        maxLength={30} 
                        placeholder="Nome de usuário"
                        value={userData.name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({name: event?.target.value}))}
                    />
                </InputUserNameContainer>
            </h1>
            <UserDescriptionContainer>
                <span>
                    Seu email é
                    <InputUserDataContainer>
                        <input
                            maxLength={30} 
                            placeholder="E-mail"
                            value={userData.email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({email: event?.target.value}))}
                        />
                    </InputUserDataContainer>
                </span>
                <span>
                    Seu CPF é
                    <InputUserDataContainer>
                        <CpfCnpj
                            placeholder="CPF"
                            required
                            maxlength={14}
                            value={userData.cpf}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({cpf: event?.target.value}))}
                        />
                    </InputUserDataContainer>
                </span>
                <span>
                    Alterar senha
                    <InputUserDataContainer>
                        <input
                            maxLength={30} 
                            placeholder="Nova senha"
                            type="password"
                            value={userData.password}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({password: event?.target.value}))}
                        />
                    </InputUserDataContainer>
                </span>
            </UserDescriptionContainer>
        </>
    );
}