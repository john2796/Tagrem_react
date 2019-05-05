import styled from 'styled-components';
import arrowBlue from '../../images/arrow-btn-blue.png';
import arrowWhite from '../../images/arrow-btn-white.png';

export const GravidaStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    margin-bottom: 5px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.25;
    color: var(--ptag-gray);
    margin-bottom: 20px;
  }
  .gravida-card {
    width: 31.333%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  button {
    background: var(--white);
    display: block;
    padding: 8.9px 15px;
    color: var(--blue);
    font-size: 1.4rem;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 2px #fff inset;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 #fff inset;
      background: var(--dark-blue);
      color: var(--white);
    }
    &:after {
      content: '';
      background: url(${arrowBlue}) no-repeat;
      width: 5px;
      height: 12px;
      position: relative;
      top: -2px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 8px;
    }
  }
  .gravida-btn-1,
  .gravida-btn-2,
  .gravida-btn-3 {
    margin-bottom: 30px;
  }
`;
