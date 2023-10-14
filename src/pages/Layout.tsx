import {NavBar} from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <NavBar/>
      <Box padding={5}>
        <Outlet/>
      </Box>

    </>
  );
};
