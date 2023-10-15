import {Game} from "../services/gameService.ts";
import {DefinitionItem} from "./DefinitionItem.tsx";
import {SimpleGrid, Text} from "@chakra-ui/react";
import {CriticScore} from "./CriticScore.tsx";

interface Props {
  game: Game
}

export const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({platform}) => (<Text key={platform.id}>{platform.name}</Text>))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic}/>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map(g => (<Text key={g.id}>{g.name}</Text>))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {game.publishers?.map(p => (<Text key={p.id}>{p.name}</Text>))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
