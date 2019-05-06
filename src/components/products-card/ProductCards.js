import React, { Component } from 'react';
import Select from 'react-select';
import { productData } from '../../dummyData';
import { ProductCardStyle } from './ProductStyle';

import MainButton from '../button/MainButton';
import ProductDetails from '../product-details/ProductDetails';

const selectOptions = [
  { label: 'All', value: 0 },
  { label: 'Less Than $500', value: 1 },
  { label: 'From $500 to $1000', value: 2 },
  { label: 'From $1000 to $2000', value: 3 },
  { label: '$2000 or more', value: 4 },
];

class ProductCards extends Component {
  state = {
    collapse: false,
    pData: productData,
  };

  toggleProductDetails = (id) => {
    this.setState({ collapse: true, activeCard: id });
  };

  closeProductDetails = () => {
    this.setState({ collapse: false });
  };

  handleChange = (option) => {
    console.log(option.value);
    if (option.value === 0) {
      this.setState(prevState => ({
        ...prevState.pData,
        pData: productData,
      }));
    } else if (option.value === 1) {
      this.setState(prevState => ({
        ...prevState.pData,
        pData: productData.filter(x => x.price <= 500),
      }));
    } else if (option.value === 2) {
      this.setState(prevState => ({
        ...prevState.pData,
        pData: productData.filter(x => x.price >= 500 && x.price <= 1000),
      }));
    } else if (option.value === 3) {
      this.setState(prevState => ({
        ...prevState.pData,
        pData: productData.filter(x => x.price >= 1000 && x.price <= 2000),
      }));
    } else if (option.value === 4) {
      this.setState(prevState => ({
        ...prevState.pData,
        pData: productData.filter(x => x.price >= 2000),
      }));
    }
  };

  render() {
    const { collapse, activeCard, pData } = this.state;
    console.log(pData);
    return (
      <>
        <div className="product-filter">
          <h2>Products</h2>
          <div className="select-wrapper">
            <p>Fitler by</p>
            <Select
              defaultValue={selectOptions[0]}
              options={selectOptions}
              isSearchable={false}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <ProductCardStyle>
          {pData.map(({
            price, id, title, content, image,
          }) => (
            <li key={id} onClick={() => this.toggleProductDetails(id)}>
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
        <ProductDetails
          isOpen={collapse}
          activeCard={activeCard}
          closeProductDetails={this.closeProductDetails}
        />
      </>
    );
  }
}

export default ProductCards;
