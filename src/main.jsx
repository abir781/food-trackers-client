import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root.jsx';
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Fridge from './Pages/Fridge.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        path:'/',
        Component:Home,
      },
      {
        path:'/register',
        Component:Register,
      },
       {
        path:'/login',
        Component:Login,
      },
         {
        path:'/fridge',
        Component:Fridge,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
