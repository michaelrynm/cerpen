import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage.jsx";
import Story from "../Pages/Story.jsx";
import FlipPage from "../Pages/FlipPage.jsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/story",
      element: <Story />,
    },
  ]);
  return <RouterProvider router={router} />;
}
