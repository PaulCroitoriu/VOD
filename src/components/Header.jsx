import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #2f3537;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 100;
    font-size: 1.3rem;
    color: #d0f683;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-out;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #d0f683;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  color: #3a2822;

  &:hover {
    color: #0c0d0e;
    transition: all 0.1s ease-out;
    font-size: 1.01rem;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo to={"/"}>
        LOG<span>O</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to={"/categories"}>Categories</MenuLink>
        <MenuLink to={"/popular"}>Popular</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Header
