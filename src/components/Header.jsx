import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const LinkNav = styled.{Link}`
  text-decoration: none;
`

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <LinkNav to={"/"}>Movie Proxy</LinkNav>
        </div>
      </nav>
    </header>
  )
}

export default Header
