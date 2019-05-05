import React from 'react';
import { productData } from '../../dummyData';
import { ProductCardStyle } from './ProductStyle';

import MainButton from '../button/MainButton';

const ProductCards = () => (
  <ProductCardStyle>
    {productData.map(({
      price, id, title, content, image,
    }) => (
      <li key={id}>
        <h3>{title}</h3>
        <p className="staring">
Starting at $
          {price}
        </p>
        <p className="content">{content}</p>
        <img src={image} alt={title} />
        <MainButton className="productBtn" onClick={() => console.log('testing')}>
          Learn More
        </MainButton>
      </li>
    ))}
  </ProductCardStyle>
);

export default ProductCards;
