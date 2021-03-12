import React from "react";
import "./collection-item.styles.scss";

const ColletctionItem = ({ id, nombre, precio, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="nombre">{nombre}</span>
      <span className="precio">{precio}</span>
    </div>
  </div>
);
export default ColletctionItem;
