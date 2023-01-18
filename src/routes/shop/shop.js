import { ProductsContext } from '../../context/products.context';
import { useContext } from 'react';
import {ProductCard} from '../../Components/product-card/product-card.component.js'
import './shop.styles.scss'

const Shop = () => {

    const {currentProducts} = useContext(ProductsContext)

    return(
        <div className='products-container'>
            {currentProducts.map((Product) => (
                <div >
                    <ProductCard key={Product.id} product={Product}/>
                   
                </div>
            ))}
        </div>
    )
}

export default Shop;

