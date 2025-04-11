// Duplicate import removed
import './App.css'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'


function App() {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/login";
  }
  
  if (localStorage.getItem('token')) {
    return (
      <>
        <Dashboard/>
        <ToastContainer/>
      </>
    )
  }
}

export default App
