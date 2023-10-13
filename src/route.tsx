import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./pages/Layout.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {GameDetail} from "./pages/GameDetail.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'games/:id', element: <GameDetail/>}
    ]
  }
]);

export default router;
