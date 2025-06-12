import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/About",
    element:<About />
  },
  {
    path:"/Blog",
    element:<Blog />
  },
  {
    path:"/Contact",
    element:<Contact />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
