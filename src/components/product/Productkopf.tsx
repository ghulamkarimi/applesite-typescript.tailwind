import { useContext } from "react";
import { AiFillApple } from "react-icons/ai";
import { AppContext } from "../../AppContext";

const Productkopf = () => {
  const { isLight } = useContext(AppContext)
  return (
    <div className={`flex p-12 bg-slate-500 gap-12 ${isLight ? "text-white " : "text-black"} `}>
      <AiFillApple className={`text-8xl`} />
      <span className="w-[50vw]">

        <p className="text-5xl   bg-gradient-to-r from-violet-500 to-fuchsia-500">APPLE PRODUCTS</p>

        <p className=" w-[50%]">
          {`  The new 15" MacBook Air with M2 chip, the new Mac Studio with M2 Max
          or M2 Ultra and the new Mac Pro with M2 Ultra.`}
        </p>
      </span>
    </div>

  );
};

export default Productkopf;
