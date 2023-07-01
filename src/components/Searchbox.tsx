import { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { AppContext } from "../AppContext";


const Searchbox = () => {
    const { filter, setFilter } = useContext(AppContext)
    return (
        <div className="flex justify-end p-4">
            <span className="bg-gray-700 flex items-center py-1 pl-2 pr-4 rounded-3xl w-[280px]">
                <input className="rounded-3xl w-[240px] text-black" type="text" placeholder="search here" value={filter}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)} />
                <ImSearch className="ml-2 text-white" />
            </span>
        </div>
    );
};

export default Searchbox;
