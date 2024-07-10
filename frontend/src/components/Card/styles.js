import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 5000;

  ${(props) =>
    !props.noShadow &&
    css`
      box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}
`;