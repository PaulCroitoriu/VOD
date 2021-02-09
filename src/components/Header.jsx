import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  color: #fbfffe;
  padding: 0 0 30px 30px;
`

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
    </HeaderWrapper>
  )
}

export default Header
