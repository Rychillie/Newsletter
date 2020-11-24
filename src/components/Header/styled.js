import styled from "styled-components"

export const MyHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
  margin-right: 0;
  width: 100%;
  max-width: 460px;

  @media screen and (min-width: 991px) {
    margin-bottom: 0;
    margin-right: 60px;
  }

  h1,
  h2,
  p {
    color: white;
  }

  h2 {
    font-weight: 400;
  }
`
