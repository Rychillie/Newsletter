import styled from "styled-components"

export const Main = styled.main`
  width: 100%;
  max-width: 460px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;

    input,
    button {
      color: white;
      font-size: 1.2rem;
      line-height: 150%;
      padding: 15px 25px;
      margin: 0 0 2%;
      border-radius: 8px;
    }

    input {
      background: rgba(255, 255, 255, 0.35);
      color: white;
      border: 0;
      width: 100%;
      font-weight: 500;

      &::placeholder {
        color: white;
      }
    }

    button {
      width: 100%;
      font-weight: 700;
      background: #1dbc60;
      border: 0;
    }
  }
`
