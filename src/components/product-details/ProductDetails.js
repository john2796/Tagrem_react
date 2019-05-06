import React from 'react';
import PropTypes from 'prop-types';

import { Collapse } from 'reactstrap';
import { ProductDetailStyle } from './ProductDetailStyle';
import { productsDetails } from '../../dummyData';

import closeIcon from '../../images/close.png';
import MainButton from '../button/MainButton';

const ProductDetails = ({ isOpen, activeCard, closeProductDetails }) => (
  <Collapse isOpen={isOpen}>
    <ProductDetailStyle>
      {productsDetails.map(
        ({
          id, title, desc, price, moreDesc, items, image,
        }) => activeCard === id && (
        <div key={id}>
          <h2>
            {title}
            <button type="button" onClick={closeProductDetails}>
              <img src={closeIcon} alt="close" />
            </button>
          </h2>
          <p className="detail-staring">{price}</p>
          <div className="detail-content-wrapper">
            <div className="detail-contents">
              <p className="detail-ptag">{desc}</p>
              <p className="detail-ptag">{moreDesc}</p>
              {items && (
              <ul className="detail-ul">
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
              </ul>
              )}
            </div>
            <div className="detail-image-wrapper">
              <img src={image} alt={title} />
            </div>
          </div>
          <MainButton className="detail-btn">Buy Online</MainButton>
        </div>
        ),
      )}
    </ProductDetailStyle>
  </Collapse>
);

ProductDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeCard: PropTypes.number,
  closeProductDetails: PropTypes.func,
};

export default ProductDetails;
