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

      .custom-select {
        border: 1px solid #ccc;
        border-radius: 3px;
        overflow: hidden;
        background: #fafafa;
        margin: 0 20px 20px 20px;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 #fff inset;
        select {
          padding: 7px 10px;
          border: none;
          box-shadow: none;
          background: transparent;
          background-image: none;
          -webkit-appearance: none;
          width: 100%;
          &:options[value='state'] {
            background-image: url(${search});
          }
        }

        select:focus {
          outline: none;
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
  .product-filter {
    display: flex;
    h2 {
      margin-right: auto;
    }
    .select-wrapper {
      margin-top: 7px;
    }
  }
`;
