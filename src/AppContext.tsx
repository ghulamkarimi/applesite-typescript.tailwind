import React, { createContext, useState } from "react";
import { IProduct } from "./interface";
import Data from "./Data.json"

interface IApp {
    isLight: boolean
    setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
    product: IProduct[]
    setProduct: (product: IProduct[]) => void
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    getProduct: (id: number) => IProduct | undefined

}
interface IAppProvider {
    children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
    const [isLight, setIsLight] = useState(false);
    const [product, setProduct] = useState(Data.product);
    const [filter, setFilter] = useState("");
    const getProduct = (idProduct: number)=> {
        return product.find((id) =>id.id === idProduct);
    }

    return (
        <AppContext.Provider
            value={{
                isLight,
                setIsLight,
                product,
                setProduct,
                filter,
                setFilter,
                getProduct
            }}>
            {children}
        </AppContext.Provider>
    )
}