import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import AuthContextProvider from './context/AuthContext.jsx'
import TourContextProvider from './context/TourContext.jsx'
import BookingContextProvider from './context/BookingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
    <TourContextProvider>
    <BookingContextProvider>
        <App />

    </BookingContextProvider>
    </TourContextProvider>

    </AuthContextProvider>

)
