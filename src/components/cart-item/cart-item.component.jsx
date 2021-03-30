import React from 'react';
import './cart-item.styles.scss'

const CartItem = ({ item: {imageUrl, precio, nombre, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'></img>
        <div className='item-details'>
            <span className='name'>{nombre}</span>
            <span className='price'>{quantity} x ${precio}</span>
        </div>
    </div>
)

export default CartItem;