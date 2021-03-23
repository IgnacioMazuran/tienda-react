import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/tienda.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        {" "}
        Tienda
      </Link>
      <Link className="option" to="/shop">
        {" "}
        Contacto
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Cerrar Sesión
        </div>
      ) : (
        <Link className="option" to="/signin">
          Iniciar Sesión
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
