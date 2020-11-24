import React from "react"

import GlobalStyle from "../../styles/GlobalStyle"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <S.Content>{children}</S.Content>
    </>
  )
}

export default Layout
