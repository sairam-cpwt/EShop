import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoutes from "./routes/PublicRoute";

const Routes = () => {
  const router = createBrowserRouter(PublicRoutes);

  return <RouterProvider router={router} />;
};

export default Routes;
