import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
    const {isOpen, toggleDropDown, cartTotal} = useContext(CartContext);


    return (
        <div onClick={toggleDropDown} className = 'cart-icon-container' >
            <ShoppingIcon className = 'shopping-icon' />
            <span className='item-count'>{cartTotal}</span>

        </div>
    )
};

export default CartIcon;