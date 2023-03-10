import { Fragment, useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropdown from '../../Components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.context';
import { UserSignOut } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isOpen, toggleDropdown} = useContext(CartContext)

    return(
      <Fragment>
        <div className = 'navigation'>
            <Link className = 'logo-container' to='/'>
                <CrwnLogo className = 'logo' />
            </Link>
            
            <div className = 'nav-links-container'>
                <Link className = 'nav-link' to='/' >HOME</Link>
                <Link className = 'nav-link' to='/shop' >SHOP</Link>
               {currentUser? 
                (<span className='nav-link' onClick = {UserSignOut} >SIGN OUT</span>) :
                (<Link className = 'nav-link' to='/auth'>SIGN IN</Link>)
              }

              <div className='nav-link' onClick={toggleDropdown}>
                <CartIcon/>
                {isOpen && <CartDropdown/>}

              </div>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  
  }

  export default Navigation;