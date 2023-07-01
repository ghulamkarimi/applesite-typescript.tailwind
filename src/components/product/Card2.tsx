import { useContext } from "react"
import { AppContext } from "../../AppContext"


const Card2 = () => {
  const { isLight } = useContext(AppContext)
  return (
    <div className={`bg-slate-600 flex justify-center ${isLight ? "text-white " : "text-black "} `}>
      <div className="flex  p-12 justify-center gap-6 rounded-2xl">
        <img className=" h-96 w-[40vw] rounded-xl " src="/image/ima.jpeg" alt="imac" />
        <span className="flex flex-col gap-24 ">
          <h3 className="text-xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-pink-500  text-center max-md:hidden  ">{'iMac Pro 27" 5K (Late 2017) Xeon W 3.2GHz - SSD 1TB - 32GB AZERTY - French'}</h3>
          <p className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-pink-500 to-r max-lg:hidden "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque, voluptas repudiandae dolore mollitia facilis minus reprehenderit aperiam sapiente sint atque blanditiis assumenda recusandae? Neque libero itaque vel expedita, a temporibus sed quae, quia nostrum, sequi nobis? Et eligendi, sunt ullam consequuntur amet porro neque expedita rerum blanditiis pariatur, dolor minus dolorem vel fugit repudiandae dolorum qui temporibus, sint delectus.</p>
        </span>
      </div>
    </div>
  )
}

export default Card2

