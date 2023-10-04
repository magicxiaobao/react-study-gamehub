import useGenres from "../hooks/UseGenres.ts";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

export const GenreList = () => {
  const { data: genres } = useGenres();
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
