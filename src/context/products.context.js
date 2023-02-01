import {createContext, useState, useEffect} from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
    currentProducts: [],

});

export const ProductsProvider = ({children}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    
    useEffect(()=>{
        const getCategoriesMap = async() => {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap)
    }
        getCategoriesMap();
    },[])

    const value = {currentProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}