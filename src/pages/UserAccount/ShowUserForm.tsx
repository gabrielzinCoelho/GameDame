import { User } from "./index";
import { InputUserData, InputUserName, UserDescriptionContainer } from "./styles";

export function ShowUserForm({userData, handleUpdateUser} : {userData : User, handleUpdateUser : (updatedValue : User) => void}){
    return (
        <>
            <h1>Olá,
                <InputUserName
                    maxLength={20} 
                    placeholder="Nome de usuário"
                    value={userData.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({name: event?.target.value}))}
                />
            </h1>
            <UserDescriptionContainer>
                <span>
                    Seu email é
                    <InputUserData 
                        maxLength={30} 
                        placeholder="E-mail"
                        value={userData.email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({email: event?.target.value}))}
                    />
                </span>
                <span>
                    Seu CPF é
                    <InputUserData 
                        maxLength={14} 
                        placeholder="CPF"
                        value={userData.cpf}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({cpf: event?.target.value}))}
                    />
                </span>
                <span>
                    Alterar senha
                    <InputUserData 
                        maxLength={30} 
                        placeholder="Nova senha"
                        type="password"
                        value={userData.password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>(handleUpdateUser({password: event?.target.value}))}
                    />
                </span>
            </UserDescriptionContainer>
        </>
    );
}