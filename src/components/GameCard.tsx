import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
