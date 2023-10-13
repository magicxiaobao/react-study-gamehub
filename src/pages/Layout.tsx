import {NavBar} from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
};
