import {User} from './index'
import { UserDescriptionContainer } from './styles';

export function ShowUserData({userData} : {userData : User}){
    return (
        <>
            <h1>{`Olá, ${userData.name}`}</h1>
            <UserDescriptionContainer>
                <span>{`Seu email é ${userData.email}`}</span>
                <span>{`Seu CPF é ${userData.cpf}`}</span>
            </UserDescriptionContainer>
        </>
    );
}