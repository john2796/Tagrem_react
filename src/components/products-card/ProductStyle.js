import styled from 'styled-components';

import arrowBlue from '../../images/arrow-btn-blue.png';

export const ProductCardStyle = styled.ul`
  margin-bottom: 13px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: var(--product-white);
    padding: 15px;
    cursor: pointer;
    width: 23%;
    margin-bottom: 15px;
    margin-right: 15px;
    @media (max-width: 768px) {
      width: 47%;
      margin-bottom: 17px;
      margin-right: 17px;
    }
    @media (max-width: 414px) {
      width: 100%;
      margin-right: 0;
    }
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
    @media (max-width: 768px) {
      width: 70%;
    }
    @media (max-width: 414px) {
      width: 100%;
      height: 164px;
      object-fit: cover;
    }
  }
  .productBtn {
    text-align: left;
    background: inherit;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
    color: var(--ptag-gray);
    @media (max-width: 414px) {
      justify-content: flex-start;
    }
    &:hover {
      background: initial;
      margin: 0;
      padding: 0;
      box-shadow: none;
      border: none;
      color: var(--blue);
      cursor: pointer;
      &:after {
        background: url(${arrowBlue}) no-repeat;
      }
    }
  }
`;
