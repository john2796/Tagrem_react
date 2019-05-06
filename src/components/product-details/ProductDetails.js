import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Collapse } from 'reactstrap';
import { ProductDetailStyle } from './ProductDetailStyle';
import { productsDetails } from '../../dummyData';

import closeIcon from '../../images/close.png';
import MainButton from '../button/MainButton';

class ProductDetails extends Component {
  state = {
    one: false,
    two: false,
    three: false,
  };

  toggleHover = (state, hover) => () => {
    this.setState({ [state]: hover });
  };

  render() {
    const { isOpen, activeCard, closeProductDetails } = this.props;
    const { one, two, three } = this.state;

    const dynamicStyleOne = one ? 'detail-list-active' : '';
    const dynamicStyleTwo = two ? 'detail-list-active' : '';
    const dynamicStyleThree = three ? 'detail-list-active' : '';

    return (
      <Collapse isOpen={isOpen}>
        <ProductDetailStyle>
          {productsDetails.map(
            ({
              title, desc, price, moreDesc, items, image, id,
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
                  <ul className="detail-ul" hidden={!items}>
                    <li
                      onMouseEnter={this.toggleHover('one', true)}
                      onMouseLeave={this.toggleHover('one', false)}
                      className={`detail-list list-0  ${dynamicStyleOne}`}
                    >
                      {items[0]}
                    </li>
                    <li
                      onMouseEnter={this.toggleHover('two', true)}
                      onMouseLeave={this.toggleHover('two', false)}
                      className={`detail-list list-1  ${dynamicStyleTwo}`}
                    >
                      {items[1]}
                    </li>
                    <li
                      onMouseEnter={this.toggleHover('three', true)}
                      onMouseLeave={this.toggleHover('three', false)}
                      className={`detail-list list-2  ${dynamicStyleThree}`}
                    >
                      {items[2]}
                    </li>
                  </ul>
                  )}
                </div>
                <div className="detail-image-wrapper">
                  <img src={image} alt={title} />
                  {items && (
                  <div className="detail-nums-wrapper">
                    <span
                      onMouseEnter={this.toggleHover('one', true)}
                      onMouseLeave={this.toggleHover('one', false)}
                      className={`detail-list-img list-img-0 ${dynamicStyleOne}`}
                    />
                    <span
                      onMouseEnter={this.toggleHover('two', true)}
                      onMouseLeave={this.toggleHover('two', false)}
                      className={`detail-list-img list-img-1 ${dynamicStyleTwo}`}
                    />
                    <span
                      onMouseEnter={this.toggleHover('three', true)}
                      onMouseLeave={this.toggleHover('three', false)}
                      className={`detail-list-img list-img-2 ${dynamicStyleThree}`}
                    />
                  </div>
                  )}
                </div>
              </div>

              <MainButton className="detail-btn">Buy Online</MainButton>
            </div>
            ),
          )}
        </ProductDetailStyle>
      </Collapse>
    );
  }
}

ProductDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeCard: PropTypes.number,
  closeProductDetails: PropTypes.func,
};

export default ProductDetails;
