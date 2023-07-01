

import Bottom from "../components/home/Bottom"
import Hero from "../components/home/Hero"
import Kopfhome from "../components/home/Kopfhome"



const PageHome = () => {
  return (
    <div className=" bg-slate-500 justify-center items-center">

      <Hero />
      <Kopfhome />
      <Bottom />
    </div>
  )
}

export default PageHome
