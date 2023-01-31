import {createContext, useState, useEffect} from 'react'
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
    currentProducts: [],

});

export const ProductsProvider = ({children}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
  
    const value = {currentProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}