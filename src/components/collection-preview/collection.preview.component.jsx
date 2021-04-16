import React from 'react';
import './collection.preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview = ({ titulo, items }) => (
    <div className='collection-preview'>
      <h1 className='title'>{titulo.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
export default CollectionPreview;