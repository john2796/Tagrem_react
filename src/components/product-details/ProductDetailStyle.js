import styled from 'styled-components';

import arrowBlue from '../../images/arrow-btn-blue.png';
import arrowWhite from '../../images/arrow-btn-white.png';
import sprite from '../../images/1-6-bullet-sprite.png';

export const ProductDetailStyle = styled.div`
  /* ------------> Product Detail  <---------------*/
  background: var(--product-white);
  padding: 100px 0;
  padding: 20px;
  margin-top: 10px;
  /* ------------> Content <---------------*/
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
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .detail-ptag {
    line-height: 1.25;
    color: var(--ptag-gray);
    margin: 10px 0 20px 0;
    font-size: 1.3rem;
  }
  .detail-contents {
    width: 50%;
    margin-right: 26px;
    @media (max-width: 768px) {
      order: -1;
      width: 100%;
    }
  }
  /* ------------> Big Image right side <---------------*/
  .detail-image-wrapper {
    width: 46%;
    position: relative;

    @media (max-width: 768px) {
      order: 2;
      width: 100%;
      flex: -1;
      margin-bottom: 20px;
    }
  }
  /* ------------> Overlay label on first image <---------------*/
  .detail-nums-wrapper {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    @media (max-width: 768px) {
      display: none;
    }
    span.detail-list-img:before {
      object-fit: cover;
      transition: all 0.2s ease-in-out;
      content: ' ';
      position: absolute;
      height: 40px;
      width: 50px;
    }
    span.list-img-0:before {
      background: url(${sprite}) 0px -22px no-repeat;
      top: 138px;
      left: 91px;
      @media (max-width: 768px) {
        top: 188px;
        left: 141px;
      }
    }
    span.list-img-1:before {
      background: url(${sprite}) 0px -66px no-repeat;
      bottom: 149px;
      left: 273px;
      @media (max-width: 768px) {
        bottom: 137px;
        left: 403px;
      }
    }
    span.list-img-2:before {
      background: url(${sprite}) 0px -111px no-repeat;
      bottom: 81px;
      right: 187px;
      @media (max-width: 768px) {
        bottom: 41px;
        right: 261px;
      }
    }
  }

  /* ------------> UL List <---------------*/
  .detail-ul {
    list-style: none;
    text-decoration: none;

    li {
      line-height: 1.25;
      color: var(--ptag-gray);
      margin: 10px 0 20px 0;
      font-size: 1.3rem;
      margin-left: 35px;
      position: relative;
    }
    li.detail-list:before {
      object-fit: cover;
      transition: all 0.2s ease-in-out;
      content: ' ';
      position: absolute;
      height: 40px;
      width: 50px;
      left: -59px;
    }
    li.list-0:before {
      background: url(${sprite}) 0px -22px no-repeat;
    }
    li.list-1:before {
      background: url(${sprite}) 0px -66px no-repeat;
    }
    li.list-2:before {
      background: url(${sprite}) 0px -111px no-repeat;
    }
  }
  .detail-list-active:before {
    z-index: 2;
    transform: scale(1.3);
    margin-left: -3px;
  }

  /* ------------> Button <---------------*/
  .detail-btn {
    background: var(--blue);
    color: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0px #fff inset;
    @media (max-width: 768px) {
      order: 1;
      flex: 1;
    }
    @media (max-width: 414px) {
      width: 92%;
    }
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
`;
