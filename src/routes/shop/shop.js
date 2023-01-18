import { ProductsContext } from '../../context/products.context';
import { useContext } from 'react';
import ProductCard from '../../Components/product-card/product-card.component.js'
import './shop.styles.scss'

const Shop = () => {

    const {currentProducts} = useContext(ProductsContext)

    return(
        <div className='products-container'>
            {currentProducts.map((product) => (
                <div >
                    <ProductCard key={product.id} product={product} /> 
                </div>
            ))}
        </div>
    )
}
export default Shop;

