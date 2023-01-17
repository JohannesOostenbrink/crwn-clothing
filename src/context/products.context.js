import {createContext, useState, useEffect} from 'react'
import SHOP_DATA from '../shop_data/shop-data'

export const ProductsContext = createContext({
    currentProducts: [],

});

export const ProductsProvider = ({children}) => {
    const [currentProducts, setCurrentProducts] = useState(SHOP_DATA);
    const value = {currentProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}