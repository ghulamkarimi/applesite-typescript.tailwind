import { NavLink } from "react-router-dom";

const Kopfhome = () => {
  return (
    <div className="pt-2 bg-slate-400 ">
      <section className="">
        <NavLink to="https://www.apple.com/de/shop/buy-iphone/iphone-14">
          <div className="main flex flex-col items-center h-[50vw] rounded-3xl mt-6 ">
            <span className=" text-black ">
              <p className="flex p-[2rem] font-bold text-3xl lg:text-6xl ">
                iphone 14
              </p>
              <p className="flex pl-8 font-bold text-2xl lg:text-4xl">
                The Prp Plus Ultra.
              </p>
            </span>
            <span className=" flex gap-14 text-blue-900 font-bold text-2xl lg:text-4xl pt-6">
              <NavLink to="https://www.apple.com/de/iphone-14-pro/">
                Learn more{">"}
              </NavLink>
              <NavLink to="https://www.apple.com/de/iphone-14-pro/">
                Buy {">"}
              </NavLink>

            </span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default Kopfhome;
