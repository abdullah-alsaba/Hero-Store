import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import InstalledApps from "../Pages/Installed Apps/InstalledApps";
import Apps from "../Pages/Apps/Apps";
import RootOutlet from "../Layout/RootOutlet";
import Error from "../Pages/Error/Error";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootOutlet,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/installedapps",
        Component: InstalledApps,
      },
      {
        path: "/apps",
        Component: Apps,
      },
    ],
    errorElement: <Error></Error>
  },
]);