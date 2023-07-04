import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CarouselGameSlide } from "./CarouselGameSlide";
import { CarouselContainer, GameCatalogContainer, GameContainer, GameShopContainer, ThumbGameContainer, GameListContainer } from "./styles";

import thumbCarouselFile1 from '../../assets/carouselThumbGames/game01.jpg'
import thumbCarouselFile2 from '../../assets/carouselThumbGames/game02.jpg'
import thumbCarouselFile3 from '../../assets/carouselThumbGames/game03.jpg'
import thumbCarouselFile4 from '../../assets/carouselThumbGames/game04.jpg'
import thumbCarouselFile5 from '../../assets/carouselThumbGames/game05.jpg'
import thumbCarouselFile6 from '../../assets/carouselThumbGames/game06.jpg'
import thumbCarouselFile7 from '../../assets/carouselThumbGames/game07.jpg'
import thumbCarouselFile8 from '../../assets/carouselThumbGames/game08.jpg'
import thumbCarouselFile9 from '../../assets/carouselThumbGames/game09.jpg'
import thumbCarouselFile10 from '../../assets/carouselThumbGames/game10.jpg'
import thumbCarouselFile11 from '../../assets/carouselThumbGames/game11.jpg'
import thumbCarouselFile12 from '../../assets/carouselThumbGames/game12.jpg'

import thumbFile1 from '../../assets/thumbGames/game01.jpg'
import thumbFile2 from '../../assets/thumbGames/game02.jpg'
import thumbFile3 from '../../assets/thumbGames/game03.jpg'
import thumbFile4 from '../../assets/thumbGames/game04.jpg'
import thumbFile5 from '../../assets/thumbGames/game05.jpg'
import thumbFile6 from '../../assets/thumbGames/game06.jpg'
import thumbFile7 from '../../assets/thumbGames/game07.jpg'
import thumbFile8 from '../../assets/thumbGames/game08.jpg'
import thumbFile9 from '../../assets/thumbGames/game09.jpg'
import thumbFile10 from '../../assets/thumbGames/game10.jpg'
import thumbFile11 from '../../assets/thumbGames/game11.jpg'
import thumbFile12 from '../../assets/thumbGames/game12.jpg'

import { useParams } from "react-router-dom";

export type GameType = {
    id: number,
    thumbFile: string,
    thumbCarouselFile: string,
    price: string,
    salePercent: number
};

export type GameCategory = "Lançamentos" | "Populares" | "Gêneros" | "Promoções";

export function GameShop(){

    const {gameCategory} = useParams();

    const games = [
        {
            id: 1,
            thumbFile: thumbFile1,
            thumbCarouselFile: thumbCarouselFile1,
            price: "120.90",
            salePercent: 25
        },
        {
            id: 2,
            thumbFile: thumbFile2,
            thumbCarouselFile: thumbCarouselFile2,
            price: "149.00",
            salePercent: 25
        },
        {
            id: 3,
            thumbFile: thumbFile3,
            thumbCarouselFile: thumbCarouselFile3,
            price: "230.00",
            salePercent: 5
        },
        {
            id: 4,
            thumbFile: thumbFile4,
            thumbCarouselFile: thumbCarouselFile4,
            price: "190.50",
            salePercent: 15
        },
        {
            id: 5,
            thumbFile: thumbFile5,
            thumbCarouselFile: thumbCarouselFile5,
            price: "250.00",
            salePercent: 5
        },
        {
            id: 6,
            thumbFile: thumbFile6,
            thumbCarouselFile: thumbCarouselFile6,
            price: "100.00",
            salePercent: 12
        },
        {
            id: 7,
            thumbFile: thumbFile7,
            thumbCarouselFile: thumbCarouselFile7,
            price: "170.90",
            salePercent: 10
        },
        {
            id: 8,
            thumbFile: thumbFile8,
            thumbCarouselFile: thumbCarouselFile8,
            price: "79.99",
            salePercent: 30
        },
        {
            id: 9,
            thumbFile: thumbFile9,
            thumbCarouselFile: thumbCarouselFile9,
            price: "180.00",
            salePercent: 15
        },
        {
            id: 10,
            thumbFile: thumbFile10,
            thumbCarouselFile: thumbCarouselFile10,
            price: "120.00",
            salePercent: 20
        },
        {
            id: 11,
            thumbFile: thumbFile11,
            thumbCarouselFile: thumbCarouselFile11,
            price: "152.50",
            salePercent: 7
        },
        {
            id: 12,
            thumbFile: thumbFile12,
            thumbCarouselFile: thumbCarouselFile12,
            price: "127.00",
            salePercent: 22
        }
    ]

    const gamesByCategory = {
        "Lançamentos" : [1, 2, 4, 5, 6, 10, 11, 12],
        "Populares": [2, 3, 6, 8, 9, 11, 12],
        "Gêneros": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        "Promoções": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

    return (
        <GameShopContainer>
            <CarouselContainer>
                <Carousel 
                    showThumbs={false} 
                    infiniteLoop={true} 
                    autoPlay interval={3000} 
                    transitionTime={2000} 
                    showStatus={false}
                >
                    <CarouselGameSlide games={new Array(games[0], games[1], games[2])} />
                    <CarouselGameSlide games={new Array(games[3], games[4], games[5])} />
                    <CarouselGameSlide games={new Array(games[6], games[7], games[8])} />
                    <CarouselGameSlide games={new Array(games[9], games[10], games[11])} />
    
                </Carousel>
            </CarouselContainer>

            <GameCatalogContainer>
                <h1>{gameCategory}</h1>
                <GameListContainer>

                {
                    gamesByCategory[gameCategory].map(gameId => (
                        <GameContainer key={gameId}>
                            <ThumbGameContainer>
                                <img src={games[gameId - 1].thumbFile} />
                            </ThumbGameContainer>
                            <footer>
                                <span>{`R$ ${games[gameId - 1].price}`}</span>
                            </footer>
                        </GameContainer>
                    ))
                }

                </GameListContainer>
            </GameCatalogContainer>
            
        </GameShopContainer>
    );
}