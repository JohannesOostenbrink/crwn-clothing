import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import CartItem from '.././cart-item/cart-item.component'

const CartDropdown = () => {
    const {isOpen} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            {isOpen &&
            <div className='cart-items'>
                {[].map(item => <CartItem item={item} />)}

            </div>
}
            <Button>GO TO CHECKOUT</Button>

        </div>
    )
}




export default CartDropdown; 