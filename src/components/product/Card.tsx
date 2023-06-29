import { useContext } from "react"
import { AppContext } from "../../AppContext"


const Card = () => {
    const { product, filter } = useContext(AppContext)
    return (

        <div className="flex bg-slate-500 flex-wrap gap-3 justify-center p-5">
            {
                product.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
                    .map((p) => (
                        <div className="flex justify-center items-center gap-3 flex-col w-[450px] bg-slate-600 rounded-3xl p-3 " key={p.id}>
                            <img className="w-[300px] aspect-square object-cover rounded-3xl " src={`/image/${p.imageUrl}.jpeg`} alt={`${p.name}`} />
                            <p>{p.name}</p>
                            <p>{p.desc}</p>
                            <p>{p.price}</p>

                        </div>
                    ))
            }

        </div>

    )
}

export default Card
