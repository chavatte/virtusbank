import styled from "styled-components";

export const NoticeAlert = styled.div`
  display: block;
  margin-top: 15px;
  padding: 10px 70px;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};

  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto, sans-serif;
  }
`;

export const Alert = styled.div`
  text-shadow:
    -1px -1px 0 ${({ theme }) => theme.colors.background},
    1px -1px 0 ${({ theme }) => theme.colors.background},
    -1px 1px 0 ${({ theme }) => theme.colors.background},
    1px 1px 0 ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-weight: bolder;
  font-size: 1rem;

  color: ${(props) => (props.type === "error" ? "red" : "green")};
`;
