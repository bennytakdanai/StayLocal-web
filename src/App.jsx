import Spinner from "./components/Spinner"
import useAuth from "./hooks/useAuth"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import TourPage from "./pages/TourPage"
import Router from "./route/route"

function App() {
 const {loading} = useAuth()
 if(loading) return <Spinner/>
  return (
    <div >
      <Router/>
      {/* <HomePage/> */}
      {/* <TourPage/> */}
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      {/* <ProfilePage/> */}
     
    </div>
  )
}

export default App
