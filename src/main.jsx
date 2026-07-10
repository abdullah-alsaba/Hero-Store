import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router';
import InstalledAppsContextProvider from './Context/InstalledAppsContextProvider/InstalledAppsContextProvider';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsContextProvider>
      <RouterProvider router={router} />
    </InstalledAppsContextProvider>
  </StrictMode>,
);
