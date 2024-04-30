import { createBrowserRouter } from "react-router-dom";
import AddArt from "./Pages/AddArt";
import AllArtDetails from "./Pages/AllArtDetails";
import AllArtItems from "./Pages/AllArtItems";
import ArtDetails from "./Pages/ArtDetails";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import MyArt from "./Pages/MyArt";
import Register from "./Pages/Register";
import UpdateArt from "./Pages/UpdateArt";
import PrivateRoute from "./PrivateRoute";
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
        element: (
          <PrivateRoute>
            <AddArt></AddArt>
          </PrivateRoute>
        ),
      },
      {
        path: "/allArt",
        element: <AllArtItems></AllArtItems>,
        loader: () => fetch("http://localhost:5000/allArt"),
      },
      {
        path: "/allArt/:id",
        element: (
          <PrivateRoute>
            <AllArtDetails></AllArtDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allArt/${params.id}`),
      },
      {
        path: "/myArt",
        element: (
          <PrivateRoute>
            <MyArt></MyArt>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allArt"),
      },
      {
        path: "/updateArt/:id",
        element: (
          <PrivateRoute>
            <UpdateArt></UpdateArt>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allArt/${params.id}`),
      },
    ],
  },
]);

export default router;
