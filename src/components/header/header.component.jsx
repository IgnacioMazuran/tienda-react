import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/tienda.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart.icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        TIENDA
      </Link>
      <Link className='option' to='/shop'>
        CONTACTO
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          CERRAR SESIÓN
        </div>
      ) : (
        <Link className='option' to='/signin'>
          INICIAR SESIÓN
        </Link>
      )}
      <CartIcon/> 
    </div>
    {
      hidden ? null : 
      <CartDropdown/>
    }
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);