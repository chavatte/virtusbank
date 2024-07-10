import styled from "styled-components";

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  width: 600px;
  max-width: 90%;
  box-shadow: 5px 5px 10px rgba(90, 97, 93, 0.3);

  h2,
  h3,
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  ul,
  li {
    list-style-type: none;
    color: ${({ theme }) => theme.colors.background2};
  }

  p {
    margin: 5px;
  }

  h2 {
    margin-bottom: 20px;
    align-self: center;
  }

  h3 {
    margin: 10px;
    align-self: flex-start;
  }

  ul.fictitious-accounts {
    padding-left: 20px;

    li {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    &:hover {
      filter: brightness(1.3);
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 100vh;
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const CloseButton = styled.button`
  position: absolute;
  align-self: flex-end;
  bottom: 20px;
  right: 20px;
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 20px;
  margin-top: 40px;
  position: static;

  &:focus {
    outline: none;
  }
`;
