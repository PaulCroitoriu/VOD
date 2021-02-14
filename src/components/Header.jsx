import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  color: #fbfffe;
  padding: 30px 0;
`

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <hr />
    </HeaderWrapper>
  )
}

export default Header
