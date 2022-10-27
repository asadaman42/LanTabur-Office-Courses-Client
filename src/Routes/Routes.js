import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut";
import LogIn from "../Pages/LogIn";
import LoginEmail from "../Pages/LoginEmail";
import Register from "../Pages/Register";
import Protected from "./Protected";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/loginemail',
                element: <LoginEmail></LoginEmail>
            },
            {
                path: '/checkout',
                element: <Protected> <CheckOut></CheckOut> </Protected>
            },

        ]
    }

])