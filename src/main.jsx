import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/global.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <div>users page</div>
      },
      {
        path: "/products",
        element: <div>products page</div>
      }
    ]
  },
  {
    path: "/login",
    element: <div>login page</div>
  },
  {
    path: "/register",
    element: <div>register page</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
