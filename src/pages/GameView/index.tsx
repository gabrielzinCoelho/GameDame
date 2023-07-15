import { GameViewContainer } from "./styles";

import { GameSection } from "./GameSection";
import { Comments } from "./Comments";

export function GameView(){
    return (
        <GameViewContainer>
            <GameSection />
            <Comments />
        </GameViewContainer>
    );
}