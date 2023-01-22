import './checkout.styles.scss'
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const Checkout = () => {
    const {cartItems, addItemToCart} = useContext(CartContext);

    return(
        <div>
        <h1>This is our checkout page</h1>
        <div>
            {cartItems.map((cartItem)=>{
            const {id, name, quantity} = cartItem;
            return(
                <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                    <br/>
                    <span onClick = {addItemToCart}> increment </span>
                    <br/>
                    <span> decrement </span>
                </div>
            )

})}
        </div>
         </div>

    )
    
};

export default Checkout; 

