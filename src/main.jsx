import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import About from './About.jsx';
import Works from './Works.jsx';
import Services from './Services.jsx';
import Contacts from './Contacts.jsx';

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/works", element: <Works /> },
  { path: "/services", element: <Services /> },
  { path: "/contacts", element: <Contacts /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
