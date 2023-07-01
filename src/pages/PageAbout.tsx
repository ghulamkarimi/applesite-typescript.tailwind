import { useContext } from "react";
import { AppContext } from "../AppContext";

const About = () => {
  const { isLight } = useContext(AppContext)
  return (

    <div className={`bg-slate-500 p-10 ${isLight ? "text-white" : "text-black"} `}>
      <div className=" flex flex-col text-center justify-centergap-6">
        <h3 className="text-4xl">Apple at Work</h3>
        <p className="text-6xl">For two.</p>
        <p className=" text-6xl">to thousands.</p>
        <p className="text-6xl">collaborate.</p>
        <p className="text-4xl flex justify-center pl-12 pr-12 mt-6   ">
          Apple hardware, software, and services work seamlessly together to
          give you and your team the power and flexibility to get the job
          done—big and small.
        </p>
      </div>

      <section className="pt-20 flex flex-wrap justify-center gap-6">
        <img className=" rounded-[46px]" src="image/aboutone.jpeg" alt="" />
        <img className="rounded-[46px]" src="image/abouttwo.jpeg" alt="" />
      </section>

      <span className="flex flex-col gap-5 mt-7 mb-5  ">
        <h3 className="text-6xl text-center">Apple at Work</h3>
        <p className="text-4xl text-center">Talk to Apple experts to find the best solution for your business.</p>
      </span>


    </div>

  );
};

export default About;

