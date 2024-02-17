import Spinner from "./components/Spinner"
import useAuth from "./hooks/useAuth"
import { ToastContainer, Slide } from 'react-toastify';
import Router from "./route/route"

function App() {
 const {loading} = useAuth()
 if(loading) return <Spinner/>
  return (
    <div >
      <Router/>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
      
     
    </div>
  )
}

export default App
