import Searchbox from "../components/Searchbox"
import Card from "../components/product/Card"
import Card2 from "../components/product/Card2"
import Productkopf from "../components/product/Productkopf"

const PageProduct = () => {
  return (
    <div className="bg-slate-500">
      <Searchbox />
      < Productkopf />
      <Card />
      <Card2 />
    </div>
  )
}

export default PageProduct
