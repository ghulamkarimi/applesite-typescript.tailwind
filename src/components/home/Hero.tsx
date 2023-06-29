import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../AppContext";
 

const Hero = () => {
  const {isLight}=useContext(AppContext)
  return (
    <div className={`flex bg-slate-500 pt-10 flex-col ${isLight?"text-white":"text-black"} `}>
      <p className="text-center ">
        Get a credit of €220 to €735 towards the purchase of an iPhone 14 or
        iPhone 14 Pro when you trade in an iPhone 11 or later.
      </p>
      <nav className="flex flex-col">
        <NavLink
          className=" text-center text-6xl mt-10 "
          to="https://www.apple.com/de/"
        >
          Mackbook Air 15
        </NavLink>
        <NavLink
          className="text-center text-3xl pt-2  "
          to="https://www.apple.com/de/"
        >
          Unbelievably big.Incredibly thin.
        </NavLink>
        <NavLink
          className=" text-center text-2xl pt-4  "
          to="https://www.apple.com/de/"
        >
          Available from 13.6.
        </NavLink>
        <span className="flex gap-10 justify-center pt-4 text-2xl text-blue-600  ">
          <NavLink className=" " to="https://www.apple.com/de/">
            More Iformation{" > "}
          </NavLink>
          <NavLink to="https://www.apple.com/de/">Order Now{" > "}</NavLink>
        </span>
      </nav>
      <img className=" pt-8 h-[40vw]" src="image/air15.jpeg" alt="" />
    </div>
  );
};

export default Hero;
