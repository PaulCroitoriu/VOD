import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Loading"
import styled from "styled-components"
import Header from "../components/Header"
import { CategoriesContext } from "../context/CategoriesContextProvider"

const Container = styled.div`
  height: 500px;
`

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto auto auto;
  padding: 10px;

  @media (max-width: 736px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 414px) {
    grid-template-columns: auto;
  }
`
const CardCategory = styled(Link)`
  background-color: transparent;
  color: #23b5d3;
  border: 2px solid #23b5d3;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 19px #111318;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: 23b5d3;
    font-weight: 600;
    border: 2px solid white;
  }
`

const Categories = () => {
  const { categories, loading } = useContext(CategoriesContext)

  return (
    <Container>
      {!loading ? (
        <>
          <Header title="Categories" />
          <GridWrapper>
            {categories.map(category => (
              <CardCategory key={category.id} to={`/movies/${category.id}`}>
                {category.name}
              </CardCategory>
            ))}
          </GridWrapper>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  )
}

export default Categories
