import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../store/GameQueryStore.ts";


const SortSelector = () => {
  const sortMap = [
    {value: "", label: "Relevance"},
    {value: "-added", label: "Date added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"},
  ];
  const selectedSortOrder = useGameQueryStore(state => state.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(state => state.setSortOrder);
  const currentOrder = sortMap.find((s) => s.value === selectedSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortMap.map((s) => (
          <MenuItem key={s.value} onClick={() => setSortOrder(s.value)}>
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector
