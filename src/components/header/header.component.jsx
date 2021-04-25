import React from "react";
import { HeaderContainer, OptionDiv, OptionLink, LogoContainer, OptionsContainer } from "./header.styles";
import { ReactComponent as Logo } from "../../assets/tienda.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart.icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        TIENDA
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACTO
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          CERRAR SESIÓN
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          INICIAR SESIÓN
        </OptionLink>
      )}
      <CartIcon/> 
    </OptionsContainer>
    {
      hidden ? null : 
      <CartDropdown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);