import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/UsePlatforms.ts";
import usePlatform from "../hooks/UsePlatform.ts";
import useGameQueryStore from "../store/GameQueryStore.ts";


export const PlatformSelector = () => {
  const {data: platforms, error} = usePlatforms();
  const selectedPlatformId = useGameQueryStore(state => state.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(state => state.setPlatformId);
  const platform = usePlatform(selectedPlatformId)
  if (error) {
    console.log(error.message);
    return;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.map((p) => (
          <MenuItem key={p.id} onClick={() => setPlatformId(p.id)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
