import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import Courses from "../Pages/Courses";
import LogIn from "../Pages/LogIn";
import LoginEmail from "../Pages/LoginEmail";
import Register from "../Pages/Register";
import Unhandled from "../Pages/Unhandled";
import ViewDetails from "../Pages/ViewDetails";
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
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/category/')
            },
            {
                path: '/category/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Protected> <CheckOut></CheckOut> </Protected>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <Unhandled></Unhandled>
            }


        ]
    }

])