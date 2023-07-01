
import { useContext } from "react"
import { BsApple } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { AppContext } from "../AppContext"

const Navbar = () => {
    const { isLight, setIsLight } = useContext(AppContext)

    return (

        <header className={`flex fixed top-0 w-[100vw]  items-center gap-5 justify-around py-3 ${isLight ? "bg-slate-600 text-white" : "bg-slate-400 text-black "}`}>
            <BsApple className=" text-2xl" />
            <ul className="flex gap-5">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
            <div className={`h-5 w-12 rounded-2xl flex items-center cursor-pointer ${isLight ? "bg-slate-800 " : "bg-slate-50"}`} onClick={() => setIsLight(!isLight)}>

                <span className={` flex duration-500 transition ease-in-out h-4 w-5 rounded-full ${isLight ? "translate-x-6 bg-slate-50" : " bg-slate-800 "}`}></span>
            </div>

        </header>


    )
}

export default Navbar
