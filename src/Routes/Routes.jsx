import { createBrowserRouter } from "react-router-dom";
import ArtDetails from "./Pages/ArtDetails";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home/Home";
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
      {
        path: "/artAndCraft/:id",
        element: <ArtDetails></ArtDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artAndCraft/${params.id}`),
      },
    ],
  },
]);

export default router;
