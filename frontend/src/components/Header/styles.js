import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.2rem;
    font-weight: bolder;
    margin-top: auto;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 10px;
  }
`;

export const Alert = styled.div`
  display: block;
  padding: 10px 40px;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background2};

  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto, sans-serif;
  }
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
