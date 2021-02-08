import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  color: #fbfffe;
  width: 100%;
  padding: 20px;
`

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
    </HeaderWrapper>
  )
}

export default Header
