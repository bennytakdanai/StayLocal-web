import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import { RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import RedirectIfAuth from "./RedirectIfAuth";
import TourPage from "../pages/TourPage";


const router = createBrowserRouter([
    {
        path: '/login',
        element: (
        <RedirectIfAuth>
            <LoginPage/>

        </RedirectIfAuth>
        )
    },
    {
        path: '/register',
        element:(
        <RedirectIfAuth>
            <RegisterPage/>
        </RedirectIfAuth>
        )

    },
    {
        path: '/',
        element:(
            <HomePage/>
        )
    },
    {
        path: '/tour',
        element:(
            <TourPage/>
        )
    },
    {
        path: '/profile',
        element:(
            <ProtectedRoute>
                <ProfilePage/>
            </ProtectedRoute>
        )
    }
])

export default function Router() {
    return <RouterProvider router={router}/>
}