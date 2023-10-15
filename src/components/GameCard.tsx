import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import GameEmoji from "./GameEmoji.tsx";
import {Game} from "../services/gameService.ts";
import {Link} from "react-router-dom";


interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </Heading>
        <GameEmoji rate={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard
