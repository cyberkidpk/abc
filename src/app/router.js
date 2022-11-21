import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import "../index.css";
import App from '../App'
import { Home } from '../features/home';
import { Login } from '../features/login';

import { SqoopIngestion, ReviewIngestion } from '../features/categories'
import { ProjectsAndPipelines } from '../features/projectsAndPipelines'


function RouterComponent(){
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectsAndPipelines />,
  },
  { path:"/login", element:<Login /> },
    { path:"/projects-and-pipelines", element:<ProjectsAndPipelines /> },
    { path:"/sqoop", element:<SqoopIngestion /> },
    { path:"/review-ingestion", element:<ReviewIngestion /> },
    { path:"*", element:<Navigate to="/" /> }

]);
    return(
    <RouterProvider router={router} />
    )
}
export { RouterComponent }