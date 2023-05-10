import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import Home from './pages/Home.jsx';
import Fiche from './pages/Fiche.jsx';
import ErrorPage from './pages/error-page';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/logement',
        element: <Fiche />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: '*',
        element: <ErrorPage />
    } // toutes les routes non trouvées -> ErrorPage
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
