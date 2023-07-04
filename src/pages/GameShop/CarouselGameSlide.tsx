import { GameType } from "./index";
import { CarouselGameItem } from "./CarouselGameItem";
import { CarouselGameSlideContainer, FirstSectionSlideContainer, SecondSectionSlideContainer } from "./styles";

export function CarouselGameSlide({games} : {games : GameType[]}){
    return (
        <CarouselGameSlideContainer>

            <FirstSectionSlideContainer>
                <CarouselGameItem game={games[0]} minorItem />
                <CarouselGameItem game={games[1]} minorItem />
            </FirstSectionSlideContainer>

            <SecondSectionSlideContainer>
                <CarouselGameItem game={games[2]} minorItem={false} />
            </SecondSectionSlideContainer>
            
        </CarouselGameSlideContainer>
    );
}