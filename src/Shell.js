import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import { ProtectedRoute } from './app/ProtectedRoute'
import "./index.css";
import { RouterComponent } from './app/router'
import { Grommet, grommet, Page, PageContent} from 'grommet'
import {Nav} from './app/Nav'
import App from './App'
import {AuthLayout} from './app/AuthLayout';
import { Home } from './features/home';
import { Login } from './features/login';

import { SqoopIngestion, ReviewIngestion } from './features/categories'
import { ProjectsAndPipelines } from './features/projectsAndPipelines'
import { ViewStatusAndDetails } from './features/viewStatusAndDetails'
const customTheme = {
  global: {
    font: {
      family: 'Arial',
      size:".9rem",
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#82FFF2',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59',
    },

    },
   anchor:{
        color:'#B90351',
        active:{
            extend:`text-decoration:underline;`
        },
        },
  button: {
    border: {
      radius: '10px',
      color: '#fff',
    },
    disabled: {
      color: 'orange',
      border: {
        color: 'orange',
      },
      extend: `border: 10px dashed red;`,
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    margin:{
        horizontal: '24px',
    },
    primary: {
      color: '#2196f3',
      active: {
        border: {
          color: 'red',
        },
        extend: `background: cadetblue;`,
      },
      extend: `background: #B90351; text-align:center; color:#efefef;`,
    },
    }
    }




function Shell() {
const routerApp1 = createBrowserRouter(createRoutesFromElements(
<>
  <Route path= "/" element={ <Navigate to='/login' />}/>
  <Route path="/login" element={<Login />} />
  <Route element={<AuthLayout/>}>
   <Route path="/projects-and-pipelines" element={
            <ProtectedRoute>
                 <ProjectsAndPipelines />
             </ProtectedRoute>} />
        <Route path="/sqoop" element={<SqoopIngestion />} />
        <Route path="/review-ingestion" element={<ReviewIngestion /> } />
        <Route path="/view-status-and-details" element={<ViewStatusAndDetails /> } />
    </Route>
    <Route path="*" element={<Navigate to="/" />}/>
</>
));
  return (
  <Grommet theme={customTheme}>
      <div className="app-container">
           <Nav />
          <Page kind="full"  style={{background:"transparent"}}>
            <PageContent style={{background:"transparent", padding:0}}>
                <RouterProvider router={routerApp1} />
             </PageContent>
          </Page>
      </div>
  </Grommet>
//    <Grommet theme={customTheme}>
//         <div className="app-container">
//                <Nav />
//                <Page kind="full"  style={{background:"transparent"}}>
//                  <PageContent style={{background:"transparent", padding:0}}>
//                     <RouterProvider router={routerApp1} />
//                 </PageContent>
//                </Page>
//            </div>
//    </Grommet>
    )
    }
 export default Shell;