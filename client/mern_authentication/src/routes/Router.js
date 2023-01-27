import React from 'react'
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/",
            element: <Home />,
        },
    ]);


    return (
        <RouterProvider router={router} />
    )
}

export default Router