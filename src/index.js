import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import Home from './home';
import About from './about';
import Skills from './skils';
import Main from './main';
import Service from './service';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './portfolio';
import Contact from './contact';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true,  element: <Home/>},
      {
        path: 'about',
        element: <About />
      }, 
      {
        path: 'skills',
        element: <Skills />
      }, 
      {
        path: 'service',
        element: <Service />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
     
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />

  </React.StrictMode>
);


