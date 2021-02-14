import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  line-height: 50px;
  text-align: center;
  color: #23b5d3;
  background: rgba(46, 46, 56, 0.4);
`

const Footer = () => {
  return <FooterWrapper>Copyright &copy; VOD 2021</FooterWrapper>
}

export default Footer
