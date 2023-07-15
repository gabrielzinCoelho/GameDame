import { PencilSimple, ShoppingCartSimple, TrashSimple, User } from "phosphor-react";
import { ButtonContainer, GameContainer, GameListContainer, ThumbGameContainer, UserAccountContainer, UserDataContainer, UserGamesContainer } from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { ShowUserData } from "./ShowUserData";
import { ShowUserForm } from "./ShowUserForm";

import gameThumb01 from "../../assets/thumbGames/game01.jpg";
import gameThumb02 from "../../assets/thumbGames/game02.jpg";
import gameThumb03 from "../../assets/thumbGames/game03.jpg";
import gameThumb04 from "../../assets/thumbGames/game04.jpg";
import gameThumb05 from "../../assets/thumbGames/game05.jpg";
import gameThumb06 from "../../assets/thumbGames/game06.jpg";
import gameThumb07 from "../../assets/thumbGames/game07.jpg";

export type User = {
    name?: string;
    email?: string;
    cpf?: string;
    password?: string;
}

export function UserAccount(){

    const userGames = [
        {
            id: 1,
            rating: 75,
            thumbFile: gameThumb01 
        },
        {
            id: 2,
            rating: 87,
            thumbFile: gameThumb02
        },
        {
            id: 3,
            rating: 100,
            thumbFile: gameThumb03
        },
        {
            id: 4,
            rating: 90,
            thumbFile: gameThumb04
        },
        {
            id: 5,
            rating: null,
            thumbFile: gameThumb05
        },
        {
            id: 6,
            rating: 90,
            thumbFile: gameThumb06
        },
        {
            id: 7,
            rating: 90,
            thumbFile: gameThumb07
        },
    ]

    const [editMode, setEditMode] = useState(false);

    const [userData, setUserData] = useState({
        name: "Gabriel Coelho Costa",
        email: "coelhocostag@gmail.com",
        cpf: "019.972.786-42",
        password: "minhaSenha123"
    })

    function handleUpdateUser(updatedValue : User){
        setUserData(userData => ({
            ...userData,
            ...updatedValue
        }));
    }

    return (
        <UserAccountContainer>
            <UserDataContainer>
                {
                    editMode ?
                    <ShowUserForm userData={userData} handleUpdateUser={handleUpdateUser} /> :
                    <ShowUserData userData={userData} />
                }
                <ButtonContainer>
                    <button onClick={() => {setEditMode(!editMode)}}>
                        {editMode ? "Confirmar alterações" : "Alterar Dados"}
                        <PencilSimple size={30} />
                    </button>
                    <button>
                        Excluir Conta
                        <TrashSimple size={30} />
                    </button>
                    <button disabled>
                        Tela do Admin
                        <User size={30} />
                    </button>
                </ButtonContainer>
            </UserDataContainer>

            <UserGamesContainer>
                <h1>Jogos Adquiridos</h1>
                <GameListContainer>

                {
                    userGames.map(game => (
                        <NavLink to={`/GameDame/jogos/${game.id}`}>
                            <GameContainer key={game.id}>
                                <ThumbGameContainer>
                                    <img src={game.thumbFile} />
                                </ThumbGameContainer>
                                <footer>
                                    <span>{game.rating ? `${game.rating}/100` : "Adicionar Avaliação" }</span>
                                </footer>
                            </GameContainer>
                        </NavLink>
                    ))
                }

                </GameListContainer>
                <footer>
                    <ShoppingCartSimple size={50}/>
                </footer>
            </UserGamesContainer>
        </UserAccountContainer>
    );
}