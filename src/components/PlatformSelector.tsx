import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatform from "../hooks/UsePlatforms.ts";
import {Platform} from "../services/platformService.ts";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number
}

export const PlatformSelector = ({
  onSelectPlatform,
                                   selectedPlatformId,
}: Props) => {
  const { data: platforms, error } = usePlatform();
  if (error) {
    console.log(error.message);
    return;
  }
  const platform = platforms.find(p => p.id === selectedPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
