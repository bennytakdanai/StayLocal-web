import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import { RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import RedirectIfAuth from "./RedirectIfAuth";
import TourPage from "../pages/TourPage";
import CreateTourPage from "../pages/CreateTourPage";



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
        path: '/tour/:id/',
        element:(
            <TourPage/>
        )
    },
    {
        path: '/createtour',
        element:(
            <CreateTourPage/>
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