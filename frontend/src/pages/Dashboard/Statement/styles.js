import styled from "styled-components";

export const StatementContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StatementItemContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StatementItemInfo = styled.div`
  p {
    margin-bottom: 2px;
  }
`;

export const StatementItemImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const NoTransactionsMessage = styled.p`
  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2rem;
  }
`;
