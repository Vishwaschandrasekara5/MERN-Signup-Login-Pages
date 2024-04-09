import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Signup/></div>,
    },
    {
      path: "/login",
      element: <div><Login/></div>,
    },
    {
      path: "/Home",
      element: <div><Home/></div>,
    },
  ]);

  return (
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  );
}

export default App;
