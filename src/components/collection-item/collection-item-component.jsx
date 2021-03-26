import React from "react";
import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button.component';

const ColletctionItem = ({ id, nombre, precio, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="nombre">{nombre}</span>
      <span className="precio">{precio}</span>
    </div>
    <CustomButton inverted>AÑADIR AL CARRO</CustomButton>
  </div>
);
export default ColletctionItem;
