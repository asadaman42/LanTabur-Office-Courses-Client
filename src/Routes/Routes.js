import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import Courses from "../Pages/Courses";
import Homepage from "../Pages/Homepage";
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
                path: '/',
                element: <Homepage></Homepage>
            },
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
                loader: () => fetch('https://10th-assignment-25-10-22-server.vercel.app/category/')
            },
            {
                path: '/category/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`https://10th-assignment-25-10-22-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Protected> <CheckOut></CheckOut> </Protected>,
                loader: ({ params }) => fetch(`https://10th-assignment-25-10-22-server.vercel.app/category/${params.id}`)

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