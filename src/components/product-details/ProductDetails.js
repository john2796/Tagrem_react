import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import { ProductDetailStyle } from './ProductDetailStyle';
import { productsDetails } from '../../dummyData';

const ProductDetails = ({ isOpen, activeCard, closeProductDetails }) => (
  <Collapse isOpen={isOpen}>
    <ProductDetailStyle>
      {productsDetails.map(
        ({
          id, order, title, desc,
        }) => activeCard === id && (
        <div key={id}>
          <h2>
            {title}
            <button type="button" onClick={closeProductDetails}>
                  x
            </button>
          </h2>
          <p>{desc}</p>
          <p>{order}</p>
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
