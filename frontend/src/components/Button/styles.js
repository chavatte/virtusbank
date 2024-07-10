import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 46px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  &:hover {
    filter: brightness(1.3);
  }

  &:disabled {
    filter: opacity(0.6);
  }
  @media (max-width: 768px) {
    border-radius: 10px;
    padding: 5px;
  }
`;