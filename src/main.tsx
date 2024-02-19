import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import { Home } from "./home"
import { NotFound } from './notFound'

const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <Home />,
  },

  // 404
  {
    path: "*",
    element: <NotFound />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
