import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrowBlue from '../../images/arrow-btn-blue.png';
import arrowWhite from '../../images/arrow-btn-white.png';

const MainButtonStyle = styled.div`
  button {
    background: var(--white);
    display: block;
    padding: 11.9px 15px;
    color: var(--blue);
    font-size: 1.4rem;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 2px #fff inset;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    transition: all 0.25s ease;
    @media (max-width: 414px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 #fff inset;
      background: var(--dark-blue);
      color: var(--white);
      &:after {
        content: '';
        background: url(${arrowWhite}) no-repeat;
        width: 5px;
        height: 12px;
        position: relative;
        top: 2.5px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 8px;
      }
    }
    &:after {
      content: '';
      background: url(${arrowBlue}) no-repeat;
      width: 5px;
      height: 12px;
      position: relative;
      top: 2.5px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 8px;
    }
  }
`;

const MainButton = ({ children, className, onClick }) => (
  <MainButtonStyle>
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  </MainButtonStyle>
);

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MainButton;
