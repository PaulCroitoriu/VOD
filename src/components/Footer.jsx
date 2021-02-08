import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  height: 100px;
  width: 100%;

  position: relative;
  text-align: center;
  padding-top: 30px;
  color: #23b5d3;
`

const Footer = () => {
  return <FooterWrapper>Copyright &copy; VOD 2021</FooterWrapper>
}

export default Footer
