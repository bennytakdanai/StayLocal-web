import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import { RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";


const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <LoginPage/>
        )
    },
    {
        path: '/register',
        element:(
            <RegisterPage/>
        )

    },
    {
        path: '/',
        element:(
            <HomePage/>
        )
    },
    {
        path: '/profile',
        element:(
            <ProfilePage/>
        )
    }
])

export default function Router() {
    return <RouterProvider router={router}/>
}