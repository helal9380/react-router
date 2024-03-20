/** @format */


import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./Components/Service/Service";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/service',
        element:<Service></Service>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Details></Details>
      }
    ]
  },
  
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
