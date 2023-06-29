import Router from "./Router"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import Footer from "./components/Footer"



const App = () => {
  const { isLight } = useContext(AppContext)

  return (
    <div className={` ${isLight ? " bg-slate-500  text-white " : "bg-slate-50  text-black"}`}>
      <Navbar />

      <Router />

      <Footer />
    </div>
  )
}

export default App
