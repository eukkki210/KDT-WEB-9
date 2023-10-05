import React from 'react';
import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import User from './User';
import UserDetail from './UserDetail';
import Redirect from './Redirect';
import NotFound from './404';
import App from '../App';
import Error from './Error';
import Comment from './Comment';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'redirect',
                element: <Redirect />,
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: 'user',
        element: <App />,
        children: [
            {
                path: '',
                element: <User />,
            },
            {
                path: ':userId',
                element: <UserDetail />,
                children: [
                    {
                        path: 'comment',
                        element: <Comment />,
                    },
                ],
            },
        ],
    },
];

const Router = createBrowserRouter(routes);

export default function AppRouter() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Router>
        </>
    );
}
