import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import {NavBar} from "../components/NavBar.tsx";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar/>
      <Box padding={5}>
        <Heading>Sorry</Heading>
        <Text>{isRouteErrorResponse(error) ? 'page not found' : 'unexpected error'}</Text>
      </Box>
    </>
  );
};
