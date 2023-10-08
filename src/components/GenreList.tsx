import useGenres from "../hooks/UseGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner,} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import {Genre} from "../services/genreService.ts";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number
}

export const GenreList = ({onSelectGenre, selectedGenreId}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
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
                fontWeight={g.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(g)}
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
