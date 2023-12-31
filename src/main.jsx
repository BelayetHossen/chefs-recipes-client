import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './contents/pages/Home.jsx';
import Main from './contents/layouts/Main.jsx';
import NotFound from './contents/pages/NotFound.jsx';
import Blog from './contents/pages/Blog.jsx';
import Login from './contents/pages/Login.jsx';
import Register from './contents/pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoutes.jsx';
import Details from './contents/pages/Details.jsx';
import singleChefLoader from './loader/singleChefLoader.js';
import Recipes from './contents/pages/Recipes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: singleChefLoader,
      },
      {
        path: "/chef/recipes/:id",
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: singleChefLoader,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
