import { Carousel } from "react-responsive-carousel";
import { CarouselContainer, GameDataContainer, GameDescriptionContainer, GameSectionContainer, GameTechnicalSheetContainer, GameViewContainer, PriceGameContainer, SaleGameContainer, ShopCarButton, TechnicalSheetInfo } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { gameData, GameDataType } from "./GameData";

export function GameSection() {

    // const navigate = useNavigate();
    const {id} = useParams();

    return (
        <GameSectionContainer>
            <CarouselContainer>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay interval={3000}
                    transitionTime={2000}
                    showStatus={false}
                >
                    {
                        gameData[id - 1].screenFiles.map(screenFile => (<img src={screenFile} />))
                    }
                </Carousel>
            </CarouselContainer>

            <GameDataContainer>
                <GameDescriptionContainer>
                    <h1>{gameData[id - 1].name}</h1>
                    <span>
                        {gameData[id - 1].description}
                    </span>
                </GameDescriptionContainer>

                <GameTechnicalSheetContainer>

                    <TechnicalSheetInfo>
                        <span>ANO DE LANÇAMENTO: </span><span>{gameData[id - 1].releaseYear}</span>
                    </TechnicalSheetInfo>

                    <TechnicalSheetInfo>
                        <span>DESENVOLVEDORA: </span><span>{gameData[id - 1].developer}</span>
                    </TechnicalSheetInfo>

                    <TechnicalSheetInfo>
                        <span>GÊNERO: </span><span>{gameData[id - 1].genre}</span>
                    </TechnicalSheetInfo>

                    <TechnicalSheetInfo>
                        <span>CLASSIFICAÇÃO: </span><span>{gameData[id - 1].ageRating}</span>
                    </TechnicalSheetInfo>

                </GameTechnicalSheetContainer>

                <SaleGameContainer>
                    <PriceGameContainer>
                        <span>{`- ${gameData[id - 1].salePercent}%`}</span>
                        <span>{`R$ ${gameData[id - 1].price}`}</span>
                    </PriceGameContainer>
                    <ShopCarButton>
                        Adicionar ao carrinho
                        <ShoppingCartSimple size={30} />
                    </ShopCarButton>
                </SaleGameContainer>

            </GameDataContainer>
        </GameSectionContainer>
    );
}