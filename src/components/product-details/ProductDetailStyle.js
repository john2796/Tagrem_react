import styled from 'styled-components';

import arrowBlue from '../../images/arrow-btn-blue.png';
import arrowWhite from '../../images/arrow-btn-white.png';

export const ProductDetailStyle = styled.div`
  /* ------------> Product Detail  <---------------*/
  background: var(--product-white);
  padding: 100px 0;
  padding: 20px;
  margin-top: 10px;

  h2 {
    align-items: flex-start;
    display: flex;
    font-size: 2.4rem;
    color: var(--blue);
    margin-bottom: 10px;

    button {
      border: none;
      background: inherit;
      margin-left: auto;
      cursor: pointer;
      outline: none;
    }
  }
  .detail-staring {
    font-size: 1.9rem;
    color: var(--staring);
    font-style: italic;
    margin-bottom: 30px;
  }
  .detail-content-wrapper {
    display: flex;
  }
  .detail-ptag {
    line-height: 1.25;
    color: var(--ptag-gray);
    margin: 10px 0 20px 0;
    font-size: 1.3rem;
  }
  .detail-contents {
    width: 500px;
    margin-right: 26px;
  }
  .detail-image-wrapper {
    width: 501px;
  }
  .detail-btn {
    background: var(--blue);
    color: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0px #fff inset;
    &:hover {
      color: var(--dark-blue);
      background: var(--white);
      &:after {
        background: url(${arrowBlue}) no-repeat;
      }
    }
    &:after {
      background: url(${arrowWhite}) no-repeat;
    }
  }
  .detail-ul {
    list-style: none;
    text-decoration: none;
    li {
      line-height: 1.25;
    color: var(--ptag-gray);
    margin: 10px 0 20px 0;
    font-size: 1.3rem;
    }
  }
`;
