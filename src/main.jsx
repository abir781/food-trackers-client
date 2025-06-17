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
import Authprovider from './Context/Authprovider.jsx';
import Addfood from './Pages/Addfood.jsx';
import Myitems from './Pages/Myitems.jsx';
import Fooddetails from './Pages/Fooddetails.jsx';
import Privateroute from './Route/Privateroute.jsx';
import Errorpage from './Pages/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
     errorElement:<Errorpage></Errorpage>,
    children:[
      {
        // path:'/',
        index:true,
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
      },
          {
        path:'/addfood',
        element:(<Privateroute>
          <Addfood></Addfood>
        </Privateroute>)
      },
           {
        path:'/myitems',
        element:(<Privateroute>
          <Myitems></Myitems>
        </Privateroute>)
        
      },
      {
        path:'/fooddetails/:id',
        hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        Component:Fooddetails,
        loader:({params})=>fetch(`https://food-server-brown.vercel.app/allfoods/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>

      <RouterProvider router={router} />

    </Authprovider>
   
  </StrictMode>,
)
