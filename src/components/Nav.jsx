import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getMenu } from "../service/API"

const Nav = styled.div`
  padding: 0 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #071013;
`

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #2f3537;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  span {
    font-weight: 800;
    font-size: 1.3rem;
    color: #23b5d3;
  }
`

const Menu = styled.div`
  margin-left: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    background-color: #23b5d3;
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
  align-items: right;
  color: #dfe0e2;

  &:hover {
    color: #a2aebb;
    transition: all 0.1s ease-out;
    font-size: 1.01rem;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setMenu(await getMenu())
    }
    fetchData()
  }, [])

  return (
    <Nav>
      <Logo to={"/"}>
        V<span>O</span>D
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      {menu.map(item => (
        <Menu key={item.id} isOpen={isOpen}>
          <MenuLink to={item.route}>{item.label}</MenuLink>
        </Menu>
      ))}
    </Nav>
  )
}

export default Header
