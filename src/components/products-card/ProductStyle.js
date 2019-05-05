import styled from 'styled-components';

import arrowBlue from '../../images/arrow-btn-blue.png';

export const ProductCardStyle = styled.ul`
  display: flex;
  li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: var(--product-white);
    padding: 15px;
    width: 300px;
    margin-right: 15px;
    border: 1px solid red;
    &:last-child {
      margin-right: 0;
    }
  }
  .staring {
    color: var(--staring);
    font-size: 1.3rem;
    margin-top: 12px;
  }
  .content {
    line-height: 1.25;
    color: var(--ptag-gray);
    margin: 10px 0 20px 0;
    font-size: 1.3rem;
  }
  h3 {
    color: var(--blue);
    font-size: 1.7rem;
  }
  img {
    margin-bottom: 15px;
  }
  .productBtn {
    text-align: left;
    background: inherit;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
    color: var(--ptag-gray);

    &:hover {
      background: initial;
      margin: 0;
      padding: 0;
      box-shadow: none;
      border: none;
      color: var(--blue);
      &:after {
        background: url(${arrowBlue}) no-repeat;
      }
    }
  }
`;
