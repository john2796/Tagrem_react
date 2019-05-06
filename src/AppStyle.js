import styled from 'styled-components';

import banner from './images/banner.jpg';
import search from './images/search.png';

export const AppStyle = styled.div`
  /* ------------> Banner <---------------*/

  .banner {
    background-image: url(${banner});
    height: 415px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* ------------> Header <---------------*/
  header {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    /* ------------> Header Contents <---------------*/
    .header-content {
      width: 85%;
      margin: 20px 0px 20px 15px;
      p {
        font-size: 1.8rem;
        line-height: 1.35;

        color: var(--light-gray);
      }
      p:first-of-type {
        margin: -10px 0 20px 0;
      }
      p:last-child {
      }
    }

    /* ------------> State Finder <---------------*/

    .header-finder {
      margin: 20px 20px 20px 0px;
      width: 365px;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 #fff inset;
      color: #002b5a;
      background: var(--bg-gray);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 769px) {
        width: 95%;
        margin: 0 auto;
        z-index: -1;
      }
      h4 {
        font-size: 2rem;
        padding: 20px 20px 0px 20px;
      }
      p {
        color: var(--blue);
        font-size: 1.2rem;
        padding: 10px 20px 10px 20px;
        margin-bottom: 5px;
      }
      /* ------------> Custom Select <---------------*/
      .state-select {
        margin: 0 20px 17px 20px;
        font-size: 1.3rem;
        color: var(--blue);
        .state-select__indicator > svg {
          display: none;
        }
        .state-select__value-container {
          position: initial;
        }
        .state-select__control {
          min-height: 32px;
        }
        .state-select__indicator-separator {
          background-color: hsl(0, 0%, 90%);
          margin-bottom: 0px;
          margin-top: 0px;
        }
        .state-select__dropdown-indicator {
          background: url(${search}) no-repeat;
          background-position: center;
          display: block;
          width: 50px;
        }
      }
    }
  }

  /* ------------> Box <---------------*/

  .box {
    padding: 40px;
    background: var(--dark-white);
    margin-bottom: 3px;
  }
  /* ------------> Product <---------------*/
  .product {
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
  }
  /* ------------> Product Filter Style <---------------*/

  .product-filter {
    display: flex;
    h2 {
      margin-right: auto;
    }
  }
  .select-wrapper {
    display: flex;
    height: 39px;
    align-items: center;
    p {
      margin-right: 11px;
      font-size: 1.3rem;
      color: var(--ptag-gray);
    }
    .filter-select {
      position: relative;
      box-sizing: border-box;
      color: var(--blue);
      width: 138px;
      font-size: 1.3rem;
      padding-bottom: -20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 #fff inset;
      max-height: 36px;
    }
  }
`;
