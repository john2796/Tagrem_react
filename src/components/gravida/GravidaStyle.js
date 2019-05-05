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
  }

  .gravida-btn-1,
  .gravida-btn-2,
  .gravida-btn-3 {
    margin-bottom: 30px;
  }
`;
