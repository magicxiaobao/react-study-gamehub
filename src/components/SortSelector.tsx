import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (order: string) => void;
  selectedSortOrder: string;
}

export const SortSelector = ({ onSelectOrder, selectedSortOrder }: Props) => {
  const sortMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentOrder = sortMap.find((s) => s.value === selectedSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortMap.map((s) => (
          <MenuItem key={s.value} onClick={() => onSelectOrder(s.value)}>
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
