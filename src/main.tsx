
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Details from './pages/Details.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/:id",
    element: (
      <Details></Details>
    ),
  }
]);


createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />,
)
