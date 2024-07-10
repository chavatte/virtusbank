import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: ${({ theme }) => theme.colors.background};
    font-weight: 700;
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .wallet {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 30px;
  }

  .primary-color {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
  }

  .pix-copy-paste {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
    display: flex;
    align-items: center;
    flex-direction: column;

    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    p{
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 768px) {
      p {
        word-break: break-all;
      }
  }
}

  input {
    color: ${({ theme }) => theme.colors.primary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default GlobalStyle;
