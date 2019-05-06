import styled from 'styled-components';

export const SocialStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    width: 94%;
  }
  @media (max-width: 414px) {
    display: none;
  }
  .social-wrapper {
    margin: 20px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      margin-right: 5px;
      opacity: 0.8;
    }
    p {
      font-size: 1.3rem;
      color: var(--white);
      margin-right: 10px;
    }
  }
`;
