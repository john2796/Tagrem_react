 import React, { Component } from 'react';
import { productData } from '../../dummyData';
import { ProductCardStyle } from './ProductStyle';

import MainButton from '../button/MainButton';
import ProductDetails from '../product-details/ProductDetails';

class ProductCards extends Component {
  state = { collapse: false };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    const { collapse } = this.state;

    return (
      <>
        <ProductCardStyle>
          {productData.map(({
            price, id, title, content, image,
          }) => (
            <li key={id} onClick={() => this.toggle(id)}>
              <h3>{title}</h3>
              <p className="staring">
Starting at $
                {price}
              </p>
              <p className="content">{content}</p>
              <img src={image} alt={title} />
              <MainButton className="productBtn">Learn More</MainButton>
            </li>
          ))}
        </ProductCardStyle>
        {/* -------> Products Details Section  <------- */}
        <ProductDetails />
      </>
    );
  }
}

export default ProductCards;
