import styled from 'styled-components';

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
    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-evenly;
      margin-bottom: 20px;
    }
  }

  .gravida-btn-1,
  .gravida-btn-2,
  .gravida-btn-3 {
    margin-bottom: 30px;
    @media (max-width: 768px) {
      margin-bottom: -30px;
    }
  }

  @media (max-width: 768px) {
    .gravida-btn {
      margin-bottom: 30px;
    }
  }
`;
