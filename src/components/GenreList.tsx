import useGenres from "../hooks/UseGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner,} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../store/GameQueryStore.ts";


const GenreList = () => {
  const genreId = useGameQueryStore(state => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore(state => state.setGenreId);
  const {data, isLoading, error} = useGenres();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner/>;
  }
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genre
      </Heading>
      <List>
        {data?.map((g) => (
          <ListItem key={g.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(g.image_background)}
                borderRadius={5}
              ></Image>
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={g.id === genreId ? "bold" : "normal"}
                onClick={() => setGenreId(g.id)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList
