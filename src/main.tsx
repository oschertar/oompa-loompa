
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  }
]);


createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />,
)
