import { CarouselGameItemContainer } from "./styles";

import gameThumb from '../../assets/carouselThumbGames/game06.jpg'
import { GameType } from ".";

export function CarouselGameItem({game, minorItem} : {game: GameType, minorItem: boolean}){
    return (
        <CarouselGameItemContainer minorItem={minorItem}>
            <img src={game.thumbCarouselFile} />
            <footer>
                <span>{`-${game.salePercent}%`}</span>
                <span>{`R$ ${game.price}`}</span>
            </footer>
        </CarouselGameItemContainer>
    );
}