import useGenres from "../hooks/UseGenres.ts";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

export const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(g.image_background)}
                borderRadius={5}
              ></Image>
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
