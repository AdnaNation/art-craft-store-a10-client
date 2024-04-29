import { createBrowserRouter } from "react-router-dom";
import AddArt from "./Pages/AddArt";
import AllArtItems from "./Pages/AllArtItems";
import ArtDetails from "./Pages/ArtDetails";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addArt",
        element: <AddArt></AddArt>,
      },
      {
        path: "/allArt",
        element: <AllArtItems></AllArtItems>,
        loader: () => fetch("http://localhost:5000/allArt"),
      },
    ],
  },
]);

export default router;
