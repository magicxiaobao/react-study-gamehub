import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import {ColorModeSwitch} from "./ColorModeSwitch.tsx";
import {SearchInput} from "./SearchInput.tsx";
import {Link} from "react-router-dom";


export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" fit="cover"></Image>
      </Link>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};
