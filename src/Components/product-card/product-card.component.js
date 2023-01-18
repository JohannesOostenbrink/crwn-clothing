import './product-card.styles.scss'
import Button from '../button/button.component'

const ProductCard = ({Product}) => {
    const {name, price, imageUrl} = Product
    return(
        <div className = 'Product-Card-Container'>
                <img src={imageUrl} alt={`${name}`} />
                <div className = 'Footer' >
                    <span className='name'>{name}</span>
                    <span className='Price'>{price}</span>
                </div>
                <Button buttonType='inverted'>Add to Cart</Button>
            </div>
    )

};

export default ProductCard 