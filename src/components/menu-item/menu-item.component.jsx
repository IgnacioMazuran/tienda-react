import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({titulo, imageUrl,size}) => (
    <div className={`${size} menu-item`} >
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
                <div className='contenido'>
                    <h1 className='titulo'>{titulo.toUpperCase()}</h1>
                    <span className='subtitulo'>Comprar Ahora</span>
                </div>
            </div>
)
export default MenuItem;