import React from 'react';
import { productData } from '../../dummyData';

import MainButton from '../button/MainButton';

const ProductCards = () => (
  <ul>
    {productData.map(({
      price, id, title, content, image,
    }) => (
      <li key={id}>
        <h3>{title}</h3>
        <p>
Starting at $
          {price}
        </p>
        <p>{content}</p>
        <img src={image} alt={title} />
        <MainButton style={{ border: 'none', boxShadow: 'none' }}>Learn More</MainButton>
      </li>
    ))}
  </ul>
);

export default ProductCards;
