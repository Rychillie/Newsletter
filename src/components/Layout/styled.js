import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media screen and (min-width: 991px) {
    flex-direction: row;
  }
`
