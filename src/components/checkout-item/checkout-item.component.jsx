import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {nombre, imageUrl, precio, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{nombre}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{precio}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)

export default CheckoutItem;