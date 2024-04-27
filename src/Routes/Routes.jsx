import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Roots from "./layouts/Roots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
    ],
  },
]);

export default router;
