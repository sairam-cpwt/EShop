import { createBrowserRouter, RouterProvider } from "react-router";
import { AllRoutes } from "./routes/routes";

const Routes = () => {
  const router = createBrowserRouter(AllRoutes);

  return <RouterProvider router={router} />;
};

export default Routes;
