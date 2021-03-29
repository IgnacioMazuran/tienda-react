import React from "react";
import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";


const ColletctionItem = ({ item, addItem }) => {
  const { nombre, precio, imageUrl} = item;
  return(
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="nombre">{nombre}</span>
      <span className="precio">{precio}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>AÑADIR AL CARRO</CustomButton>
  </div>
  )};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ColletctionItem);
