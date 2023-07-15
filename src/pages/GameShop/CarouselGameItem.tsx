import { CarouselGameItemContainer } from "./styles";
import { GameType } from ".";
import { useNavigate } from "react-router-dom";

export function CarouselGameItem({game, minorItem} : {game: GameType, minorItem: boolean}){

    const navigate = useNavigate();

    return (
        <CarouselGameItemContainer minorItem={minorItem} onClick={ () => (navigate(`/GameDame/jogos/${game.id}`)) }>
            <img src={game.thumbCarouselFile} />
            <footer>
                <span>{`-${game.salePercent}%`}</span>
                <span>{`R$ ${game.price}`}</span>
            </footer>
        </CarouselGameItemContainer>
    );
}