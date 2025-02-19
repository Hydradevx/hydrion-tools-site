import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home/HomePage.tsx';
import Discord from './pages/Discord/Discord.tsx';
import ProjectsPage from './pages/Projects/ProjectsPage.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/discord',
    element: <Discord />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)