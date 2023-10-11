import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar.tsx";
import {GameGrid} from "./components/GameGrid.tsx";
import {GenreList} from "./components/GenreList.tsx";

import {PlatformSelector} from "./components/PlatformSelector.tsx";

import {SortSelector} from "./components/SortSelector.tsx";
import {GameHeading} from "./components/GameHeading.tsx";


function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading/>
          <HStack spacing={5}>
            <PlatformSelector/>
            <SortSelector/>
          </HStack>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
