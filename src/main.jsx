import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router';
import InstalledAppsContextProvider from './Context/InstalledAppsContextProvider/InstalledAppsContextProvider';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsContextProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </InstalledAppsContextProvider>
  </StrictMode>,
);
