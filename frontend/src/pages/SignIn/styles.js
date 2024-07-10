import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 50vh;
  background-image: url(${({ image }) => image});
  background-size: cover;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  margin-top: 67px;
  width: 90%;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 0.75rem;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.secondary};

    a {
      font-size: 1rem;
      font-weight: 700;
      font-family: Roboto, sans-serif;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;

export const InfoBall = styled.div`
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  span {
    display: none;
    white-space: nowrap;
    animation: typing 0.8s steps(12, end);
  }

  &:hover {
    width: auto;
    border-radius: 10px;

    img {
      margin-right: 5px;
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 2px;
      font-size: 1.5rem;
      display: inline;
      margin-right: 5px;
    }
  }
`;
