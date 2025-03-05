import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage.jsx";
import Story from "../Pages/Story.jsx";
import FlipBookNavigation from "../Pages/FlipbookNavigations.jsx";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FlipBookNavigation />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return <RouterProvider router={router} />;
}
