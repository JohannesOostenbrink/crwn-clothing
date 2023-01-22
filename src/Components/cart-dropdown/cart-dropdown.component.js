import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import CartItem from '.././cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const {isOpen,cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const GoToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            {isOpen &&
            <div className='cart-items'>
                {cartItems.map(item => 
                <CartItem key={item.id} item={item} />)}

            </div>
}
            <Button onClick={GoToCheckoutHandler}>CHECKOUT</Button>

        </div>
    )
}




export default CartDropdown; 