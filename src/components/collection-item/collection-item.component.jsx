import React from "react";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ({ item, addItem }) => {
  const { nombre, precio, imageUrl} = item;

   return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{nombre}</NameContainer>
        <PriceContainer>{precio}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
      <span className='full'>AÑADIR AL CARRO</span> 
      <span className='short'>AÑADIR</span>
      </AddButton>
      
    </CollectionItemContainer>
  )
  };

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
