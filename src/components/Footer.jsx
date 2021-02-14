import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
  line-height: 100px;
  text-align: center;
  color: #23b5d3;
  background: linear-gradient(to top, #2e2e38, #2e2e38 20%, transparent 60%);
`

const Footer = () => {
  return <FooterWrapper>Copyright &copy; VOD 2021</FooterWrapper>
}

export default Footer
