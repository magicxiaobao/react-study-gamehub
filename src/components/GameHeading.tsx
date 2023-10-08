import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";
import usePlatform from "../hooks/UsePlatforms.ts";
import useGenres from "../hooks/UseGenres.ts";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const {data: platforms} = usePlatform()
  const {data: genres} = useGenres()
  const platForm = platforms.find(p => p.id === gameQuery.platformId);
  const genre = genres.find(g => g.id === gameQuery.genreId);
  const heading = `${platForm?.name || ""} ${
    genre?.name || ""
  } Game`;
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};
